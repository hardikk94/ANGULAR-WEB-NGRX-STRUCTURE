import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CompanyProfileRoutingModule,
    SharedModule
  ]
})
export class CompanyProfileModule { }
