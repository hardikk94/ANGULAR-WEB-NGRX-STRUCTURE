import { NgModule } from '@angular/core';
import { HelpComponent } from './components/help/help.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpRoutingModule } from './help-routing.module';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    SharedModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
