import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from './../../../../core/providers/toast.service'
import { ApiService } from './../../../../core/providers/api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { SessionStorageService } from './../../../../core/providers/session-storage.service'
import { Router } from '@angular/router'
import { AuthStoreService } from './../../../../store/stores/auth.store'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  public loginForm: FormGroup
  public loginSubscriber:Subscription
  constructor(
    public toastService: ToastService,
    public apiService: ApiService,
    public sessionService: SessionStorageService,
    public router: Router,
    public authStoreSevice:AuthStoreService,
    public formBuilder: FormBuilder) { }


  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })

    this.loginSubscriber = this.authStoreSevice.storeSelect().subscribe((response) =>{
      console.log(response)
    })

  }

  public ngOnDestroy()
  {
    if(this.loginSubscriber)
    {
      this.loginSubscriber.unsubscribe()
    }
  }


  public login() {        
    this.authStoreSevice.dispatchLoginAction(this.loginForm.value)    
    // this.sessionService.setItem('isLoggedIn', true)    
    // this.router.navigate(['home']);
  }
}
