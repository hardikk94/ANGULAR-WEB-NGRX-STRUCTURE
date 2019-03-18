import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
import { DashboardComponent } from './components/dashboard/dashboard.component'

export const routes:Routes =[{
  path:'',
  component:DashboardComponent
}]

@NgModule({
  declarations: [],
  imports: [  
    RouterModule.forChild(routes)  
  ]
})
export class DashboardRoutingModule { }
