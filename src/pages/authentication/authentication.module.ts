import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { AuthRoutingModule } from './auth-routing.module'
import { ShareModule } from './../../shared/shared.module'

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent],
  imports: [
    CommonModule,
    ShareModule,
    AuthRoutingModule
  ],
  exports:[LoginComponent, SignupComponent, ForgotComponent]
})
export class AuthenticationModule { }
