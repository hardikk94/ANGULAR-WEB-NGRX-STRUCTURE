import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup,FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerType = 'candidate';
  public currentStep="persion-info"
  public occupationList:any[];
  public registerForm:FormGroup
  constructor(
    public router:Router,
    public formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name:[''],
      last_name:['']
    })


    this.occupationList = [
      {
        id:-1,
        name:"--Please select occupation--"        
      },
      {
        id:1,
        name:"Bussiness"        
      },
      {
        id:2,
        name:"Private Job"        
      }
    ]
  }

  public showRegisterForm(type) {
    if (type == 'candidate') {
      this.registerType = 'candidate'
    }
    else {
      this.registerType = 'client'
    }
  }

  public alreadyHaveAccount(){
    this.router.navigate(['auth'])
  }

  public goToNextStep(type)
  {
    this.currentStep = type
  }
}
