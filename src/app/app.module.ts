import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,        
  ],
  imports: [
    BrowserModule,
    CoreModule,    
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
