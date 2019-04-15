import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CompanyProfileEffects } from './store/company-profile.effects';
import { CompanyProfileReducer } from './store/company-profile.reducer';
import { CompanyProfileService } from './store/company-profile.service';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CompanyProfileRoutingModule,
    SharedModule,
    NgbModule,
    EffectsModule.forFeature([CompanyProfileEffects]),
    StoreModule.forFeature('companyProfileInfo', CompanyProfileReducer)  
  ],
  providers:[CompanyProfileService]
})
export class CompanyProfileModule { }
