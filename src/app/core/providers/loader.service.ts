import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingState } from './../../store/states/loading.state'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private spinner: NgxSpinnerService) { }

  public loadingShow() {
    this.spinner.show()
  }

  public loadingHide() {
    this.spinner.hide()
  }
}
