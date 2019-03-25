import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup,FormBuilder, Validators} from '@angular/forms'
import { Subscription } from 'rxjs/Subscription';
import { RegisterStoreService } from './../store/register.store'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit , OnDestroy{
  public registerType = 'candidate';
  public currentStep="persion-info"
  public occupationList:any[];
  public registerForm:FormGroup
  public registerSubscription:Subscription
  constructor(
    public router:Router,
    public formBuilder:FormBuilder,
    public registerStoreService:RegisterStoreService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name:[''],
      last_name:['']
    })


    this.registerSubscription = this.registerStoreService.storeSelect().subscribe((response)=>{
      console.log("registerInfo",response)
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

  public ngOnDestroy()
  {
    if(this.registerSubscription)
    {
      this.registerSubscription.unsubscribe()
    }
  }
}
