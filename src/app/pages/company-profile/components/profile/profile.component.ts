import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/providers/modal.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public startDate: string;
  public title: string

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  public editDetails() {
    const modalRef = this.modalService.openModal(EditProfileComponent, "Edit Details",'');
    modalRef.componentInstance.name = 'Hardik';
  }

  public backToList() {
  }

  public changePassword() {
    const modalRef = this.modalService.openModal(ChangePasswordComponent, "Change Password",'');
    modalRef.componentInstance.name = 'Hardik';
  }
}
