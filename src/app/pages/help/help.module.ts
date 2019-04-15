import { NgModule } from '@angular/core';
import { HelpComponent } from './components/help/help.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpRoutingModule } from './help-routing.module';
import { HelpService } from './store/help.service';
import { EffectsModule } from '@ngrx/effects';
import { HelpEffects } from './store/help.effects';
import { StoreModule } from '@ngrx/store';
import { HelpReducer } from './store/help.reducer';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    SharedModule,
    HelpRoutingModule,
    EffectsModule.forFeature([HelpEffects]),
    StoreModule.forFeature('helpInfo', HelpReducer)
  ],
  providers:[HelpService]
})
export class HelpModule { }
