import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

// ngrx module
import './core/providers/rxjs';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from "@ngrx/store";
import { middlewareReducer } from './store/reducers/middleware.reducer'
import { reducers } from './store/reducers/app.reducer'
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from './store/effects/auth.effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(reducers, { metaReducers: middlewareReducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
