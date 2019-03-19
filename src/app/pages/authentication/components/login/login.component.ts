import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../../../core/providers/toast.service'
import { ApiService } from './../../../../core/providers/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public toastService: ToastService,
    public apiService:ApiService) { }
    

  ngOnInit() {
    console.log("init")
  }

  public login() {
    this.apiService.get('list').subscribe((response:any) =>{
      console.log(response)
    })
    this.toastService.showToastMessage('success', "Login", "Succefully Logged in")
  }

}
