import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module'
import { RegisterRoutingModule } from './register-routing.module'
import { RegisterComponent } from './components/register.component';

//store
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store'
import { RegisterEffects } from './store/register.effects'
import { RegisterReducer } from './store/register.reducer'
import { RegisterStoreService } from './store/register.store';
import { RegisterService } from './store/register.service';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    RegisterRoutingModule,
    EffectsModule.forFeature([RegisterEffects]),
    StoreModule.forFeature('registerInfo', RegisterReducer)
  ],
  providers: [RegisterStoreService, RegisterService]
})
export class RegisterModule { }
