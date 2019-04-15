import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingState } from 'src/app/store/states/loading.state';
import { CompanyProfileStoreService } from '../../store/company-profile.store';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public editProfileForm: FormGroup;
  public title: string
  constructor(public activeModal: NgbActiveModal, public formBuilder: FormBuilder, public companyProfileStoreService: CompanyProfileStoreService) { }

  ngOnInit() {
    this.editProfileForm = this.formBuilder.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      jobtitle: ["", [Validators.required]],
      businesstype: ["", [Validators.required]],
      businessname: ["", [Validators.required]],
      empsatusreq: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phoneno: ["", [Validators.required]],
      mobileno: ["", [Validators.required]],
      address: ["", [Validators.required]]
    });
  }

  editProfile() {
    let profileData = {};
    let loader: LoadingState = {
      isLoading: true,
      message: "Please wait,Adding Profile.."
    }
    profileData = this.editProfileForm.controls.value;
    this.companyProfileStoreService.dispatchLoader(loader);
    this.companyProfileStoreService.dispatchCompanyProfileAction(profileData);
  }

}
