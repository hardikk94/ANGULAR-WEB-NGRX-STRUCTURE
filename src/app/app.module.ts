import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { ShareModule } from './../shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    ShareModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
