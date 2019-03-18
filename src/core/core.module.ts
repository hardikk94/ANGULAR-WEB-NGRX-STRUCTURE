import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'
import { ToastComponent } from './components/toastr.component'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonService } from './providers/common.service'
import { ToastService } from './providers/toast.service'
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component'
@NgModule({
    declarations: [
        ToastComponent,        
        PageNotFound404Component
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            toastComponent: ToastComponent,
        }),
    ],
    exports:[
        ToastComponent,                
    ],
    entryComponents: [ToastComponent],
    providers: [
        CommonService,
        ToastService
    ],
})
export class CoreModule {
    constructor() {

    }
}