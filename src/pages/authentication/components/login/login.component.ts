import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../../../core/providers/toast.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public toastService: ToastService) { }

  ngOnInit() {
    console.log("init")
  }

  public login() {
    this.toastService.showToastMessage('success', "Login", "Succefully Logged in")
  }

}
