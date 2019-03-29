import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent} from './components/register.component'
import { NormallayoutComponent } from 'src/app/shared/components/normallayout/normallayout.component';
import { SharedModule } from './../../shared/shared.module'


const routes:Routes =[{
  path:'',
  component:NormallayoutComponent,
  children:[{
    path:'',
    component:RegisterComponent
  }]
}]
@NgModule({  
  imports: [    
    RouterModule.forChild(routes),
    SharedModule,    
  ],
  exports:[RouterModule],
  providers:[]
})
export class RegisterRoutingModule { }
