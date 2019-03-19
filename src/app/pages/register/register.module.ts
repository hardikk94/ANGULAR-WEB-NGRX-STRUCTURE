import { NgModule } from '@angular/core';
import { ShareModule } from './../../shared/shared.module'
import { RegisterRoutingModule } from './register-routing.module'
import { RegisterComponent} from './register.component'

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    ShareModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
