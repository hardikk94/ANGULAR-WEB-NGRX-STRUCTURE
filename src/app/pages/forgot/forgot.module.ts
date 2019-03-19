import { NgModule } from '@angular/core';
import { ShareModule } from './../../shared/shared.module'
import { ForgotRoutingModule } from './forgot-routing.module'
import { ForgotComponent } from './forgot.component'
@NgModule({
  declarations: [
    ForgotComponent
  ],
  imports: [    
    ShareModule,
    ForgotRoutingModule
  ]
})
export class ForgotModule { }
