import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module'
import { SharedModule} from './../../shared/shared.module'
@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  providers:[]
})
export class AuthenticationModule { }
