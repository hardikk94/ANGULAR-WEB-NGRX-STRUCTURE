import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingState } from 'src/app/store/states/loading.state';
import { CompanyProfileStoreService } from '../../store/company-profile.store';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public title:string
  public changePasswordForm:FormGroup
  constructor(public activeModal: NgbActiveModal,public formbuilder:FormBuilder,public companyProfileStoreService:CompanyProfileStoreService) { }

  ngOnInit() {
    this.changePasswordForm = this.formbuilder.group({
      oldpassword:["",[Validators.required]],
      newpassword:["",[Validators.required]],
      confirmpassword:["",[Validators.required]],
    });
  }

  changePassword(){
    let passwordData = {};
    let loader: LoadingState = {
      isLoading:true,
      message:"Please wait,Changing Password.."
    }
    passwordData = this.changePasswordForm.controls.value;
    this.companyProfileStoreService.dispatchLoader(loader);
    this.companyProfileStoreService.dispatchChangePasswordAction(passwordData);
  }

}
