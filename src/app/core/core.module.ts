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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { SessionStorageService } from './providers/session-storage.service'
import { AuthGuardService } from './providers/auth.guard.service'
import { AuthService } from './../store/providers/auth.service'
import { AuthStoreService } from './../store/stores/auth.store'
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderService } from './providers/loader.service';
import { ModalService } from './providers/modal.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// declare all imperative component here
import { TimesheetDetailComponent } from '../pages/timesheet/components/timesheet-detail/timesheet-detail.component';
import { TimesheetStoreService } from '../pages/timesheet/store/timesheet.store';
import { EditProfileComponent } from '../pages/company-profile/components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from '../pages/company-profile/components/change-password/change-password.component';
import { CompanyProfileStoreService } from '../pages/company-profile/store/company-profile.store';
import { CalendarStoreService } from '../pages/calendar/store/calendar.store';


@NgModule({
    declarations: [
        ToastComponent,
        PageNotFound404Component,
        TimesheetDetailComponent,
        EditProfileComponent,
        ChangePasswordComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot({
            toastComponent: ToastComponent,
        }),
        AppRoutingModule,
        SharedModule,
        NgxSpinnerModule,
        NgbModule.forRoot()
    ],
    exports: [
        ToastComponent,
        AppRoutingModule,
        NgxSpinnerModule,
        TimesheetDetailComponent,
        SharedModule,
        EditProfileComponent,
        ChangePasswordComponent

    ],
    entryComponents: [ToastComponent, TimesheetDetailComponent,EditProfileComponent,ChangePasswordComponent],
    providers: [
        CommonService,
        ToastService,
        ApiService,
        { provide: HTTP_INTERCEPTORS, useClass: HTTPintercepterService, multi: true }
        ,
        SessionStorageService,
        AuthGuardService,
        AuthStoreService,
        AuthService,
        LoaderService,
        ModalService,
        TimesheetStoreService,
        CompanyProfileStoreService,
        CalendarStoreService
    ],
})
export class CoreModule {
    constructor() {

    }
}