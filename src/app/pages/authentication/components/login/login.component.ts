import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../../../core/providers/toast.service'
import { ApiService } from './../../../../core/providers/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { SessionStorageService } from './../../../../core/providers/session-storage.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  constructor(
    public toastService: ToastService,
    public apiService: ApiService,
    public sessionService: SessionStorageService,
    public router: Router,
    public formBuilder: FormBuilder) { }


  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }


  public login() {
    this.sessionService.setItem('isLoggedIn', true)    
    this.toastService.showToastMessage('success', "Login", "Succefully Logged in")
    this.router.navigate(['home']);
  }
}
