import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Subscription } from 'rxjs/Subscription';
import { RegisterStoreService } from './../store/register.store'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerType = 'candidate';
  public currentStep = "persion-info"
  public occupationList: any[];
  public registerForm: FormGroup;
  public candidateForm: FormGroup;
  public clientForm: FormGroup;
  public persionDetailForm: FormGroup;
  public businessDetailForm: FormGroup;
  public accountDetailForm: FormGroup;

  public registerSubscription: Subscription;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public registerStoreService: RegisterStoreService
  ) { }

  ngOnInit() {
    this.candidateForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      occuoation: [-1, [Validators.required, this.checkSelectedItem]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      retype_password: ['', [Validators.required, Validators]],
      agreeTerm: ['', Validators.requiredTrue]
    },
      { validators: this.confirmPasswordMatch }
    )

    this.persionDetailForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      job_title: ['', [Validators.required]],
      ocuupation: ['', Validators.required],
      ocuupation_name: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.businessDetailForm = this.formBuilder.group({
      phone_no: ['', [Validators.required]],
      mobile_no: ['', [Validators.required]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', Validators.required],
      addressline3: ['', Validators.required],
      town: ['', Validators.required],
      zip_code: ['', Validators.required]
    });

    this.accountDetailForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
    this.clientForm = this.formBuilder.group({
      persionDetailForm: this.persionDetailForm,
      businessDetailForm: this.businessDetailForm,
      accountDetailForm: this.accountDetailForm,
    });

    this.registerForm = this.formBuilder.group({
      candidateForm: this.candidateForm,
      clientForm: this.clientForm
    });


    this.registerSubscription = this.registerStoreService.storeSelect().subscribe((response) => {
      console.log("registerInfo", response)
    })

    this.occupationList = [
      {
        id: -1,
        name: "--Please select occupation--"
      },
      {
        id: 1,
        name: "Bussiness"
      },
      {
        id: 2,
        name: "Private Job"
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

  public confirmPasswordMatch(formGroup: FormGroup) {
    return formGroup.controls['password'].value === formGroup.controls['retype_password'].value ? null : { 'mismatch': true };
  }

  public checkSelectedItem(fc: FormControl) {
    if (fc.value == -1) {
      return { notselected: true }
    }
  }

  public alreadyHaveAccount() {
    this.router.navigate(['auth'])
  }

  public goToNextStep(type) {
    this.currentStep = type
  }

  public register() {
    console.log(this.registerForm)
  }

  public ngOnDestroy() {
    if (this.registerSubscription) {
      this.registerSubscription.unsubscribe()
    }
  }
}