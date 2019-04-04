import { Component, OnInit } from '@angular/core';
import { AuthStoreService } from 'src/app/store/stores/auth.store';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {
  public isMenuOpened: boolean = false
  constructor(
    public authStoreService: AuthStoreService
  ) { }

  ngOnInit() {
  }

  public logOut() {
    this.authStoreService.dispatchLogoutAction();
  }

  public toggleMenu(isToggleOpend) {
    this.isMenuOpened = !isToggleOpend
  }
}
