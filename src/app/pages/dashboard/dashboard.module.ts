import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShareModule } from './../../shared/shared.module'
import { DashboardRoutingModule } from './dashboard-routing.module'
@NgModule({
  declarations: [DashboardComponent],
  imports: [    
    ShareModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
