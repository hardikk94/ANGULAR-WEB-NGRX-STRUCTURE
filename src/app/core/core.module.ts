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
import { ShareModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { SessionStorageService } from './providers/session-storage.service'
import { AuthGuardService } from './providers/auth.guard.service'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { middlewareReducer } from './../store/reducers/middleware.reducer'
import { reducers } from './../store/reducers/app.reducer'
import { AuthEffects } from './../store/effects/auth.effects'
import { AuthService } from './../store/providers/auth.service'
import { AuthStoreService } from './../store/stores/auth.store'
import { StoreRouterConnectingModule } from '@ngrx/router-store'

@NgModule({
    declarations: [
        ToastComponent,
        PageNotFound404Component
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        ToastrModule.forRoot({
            toastComponent: ToastComponent,
        }),
        ShareModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, { metaReducers: middlewareReducer }),
        EffectsModule.forRoot([AuthEffects]),
        StoreRouterConnectingModule
    ],
    exports: [
        ToastComponent,
        AppRoutingModule
    ],
    entryComponents: [ToastComponent],
    providers: [
        CommonService,
        ToastService,
        ApiService,
        { provide: HTTP_INTERCEPTORS, useClass: HTTPintercepterService, multi: true }
        ,
        SessionStorageService,
        AuthGuardService,
        AuthStoreService,
        AuthService
    ],
})
export class CoreModule {
    constructor() {

    }
}