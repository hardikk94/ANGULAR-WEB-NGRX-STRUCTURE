import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';

@Component({
  selector: '[toast-component]',
  template: `
  <div [style.display]="state.value === 'inactive' ? 'none' : ''">
      <div class="upper-row">
          <div class="upper-title">
              <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
                  {{ title }}
              </div>       
          </div>

          <div>
              <a *ngIf="!options.closeButton" class="btn btn-pink btn-sm" (click)="action($event)">
                {{ undoString }}
              </a>
              <a *ngIf="options.closeButton" (click)="remove()" class="btn btn-pink btn-sm">
              close
              </a>
          </div>
      </div>

      <div class="down-row">
          <div *ngIf="message && options.enableHtml" role="alert" aria-live="polite"
            [class]="options.messageClass" [innerHTML]="message">
          </div>

          <div *ngIf="message && !options.enableHtml" role="alert" aria-live="polite"
          [class]="options.messageClass" [attr.aria-label]="message">
          {{ message }}
          </div>
      </div>

    </div>
    
    <div *ngIf="options.progressBar">
      <div class="toast-progress" [style.width]="width + '%'"></div>
    </div>
    `,
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        opacity: 0,
      })),
      transition('inactive => active', animate('1500ms ease-in', keyframes([
        style({
          transform: 'translate3d(100%, 0, 0) ',
          opacity: 0,
        }),
        style({
          opacity: 1,
        }),
        style({
          opacity: 1,
        }),
        style({
          transform: 'none',
          opacity: 1,
        }),
      ]))),
      transition('active => removed', animate('1500ms ease-out', keyframes([
        style({
          opacity: 1,
        }),
        style({
          transform: 'translate3d(100%, 0, 0)',
          opacity: 0,
        }),
      ]))),
    ]),
  ],
  preserveWhitespaces: false,
})
export class ToastComponent extends Toast {
  // used for demo purposes
  undoString = 'undo';

  // constructor is only necessary when not using AoT
  constructor(
    protected toastrService: ToastrService,
    public toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage);
  }

  action(event: Event) {
    event.stopPropagation();
    this.undoString = 'undid';
    this.toastPackage.triggerAction();
    return false;
  }
}