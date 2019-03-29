import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './components/forgot.component';

//store
import { ForgotService } from './store/forgot.service';
import { EffectsModule } from '@ngrx/effects';
import { ForgotEffects } from './store/forgot.effects';
import { ForgotStoreService } from './store/forgot.store';
import { StoreModule } from '@ngrx/store'
import { forgotReducer } from './store/forgot.reducer'

@NgModule({
  declarations: [
    ForgotComponent
  ],
  imports: [
    SharedModule,
    ForgotRoutingModule,
    StoreModule.forFeature('forgotInfo', forgotReducer),
    EffectsModule.forFeature([ForgotEffects]),
  ],
  providers: [
    ForgotService,
    ForgotStoreService

  ]
})
export class ForgotModule { }
