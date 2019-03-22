import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module'
import { ShareModule} from './../../shared/shared.module'
@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    ShareModule
  ],
  providers:[]
})
export class AuthenticationModule { }
