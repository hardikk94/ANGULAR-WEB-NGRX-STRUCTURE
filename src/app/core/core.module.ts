import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'
import { ToastComponent } from './components/toastr.component'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component'
import { CommonService } from './providers/common.service'
import { ToastService } from './providers/toast.service'
import { ApiService } from './providers/api.service';
import { HTTPintercepterService } from './providers/httpintercepter.service';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { SessionStorageService } from './providers/session-storage.service'
import { AuthGuardService } from './providers/auth.guard.service'


@NgModule({
    declarations: [
        ToastComponent,        
        PageNotFound404Component
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot({
            toastComponent: ToastComponent,
        }),
        ShareModule,
        AppRoutingModule
    ],
    exports:[
        ToastComponent,
        AppRoutingModule                
    ],
    entryComponents: [ToastComponent],
    providers: [
        CommonService,
        ToastService,
        ApiService,
        HTTPintercepterService,
        SessionStorageService,
        AuthGuardService
    ],
})
export class CoreModule {
    constructor() {

    }
}