import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HomelayoutComponent } from './../../shared/components/homelayout/homelayout.component'


export const routes:Routes =[{
  path:'',
  component:HomelayoutComponent,
  children:[{
    path:'',
    component:DashboardComponent,
  }]
}]

@NgModule({
  declarations: [],
  imports: [  
    RouterModule.forChild(routes)  
  ]
})
export class DashboardRoutingModule { }
