import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent} from './register.component'
import { NormallayoutComponent } from 'src/app/shared/components/normallayout/normallayout.component';
import { ShareModule } from './../../shared/shared.module'
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
    ShareModule
  ],
  exports:[RouterModule]
})
export class RegisterRoutingModule { }
