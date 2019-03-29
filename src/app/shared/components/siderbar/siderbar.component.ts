import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from './../../../core/providers/session-storage.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {

  constructor(
    public sessionStorage: SessionStorageService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  public logOut() {
    this.sessionStorage.removeItem("authtoken");
    this.router.navigate['auth']
  }
}
