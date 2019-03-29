import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomelayoutComponent } from 'src/app/shared/components/homelayout/homelayout.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [{
  path: '',
  component: HomelayoutComponent,
  children: [{
    path: '',
    component: ProfileComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CompanyProfileRoutingModule { }
