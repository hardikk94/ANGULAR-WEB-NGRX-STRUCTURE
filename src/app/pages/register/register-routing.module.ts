import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent} from './register.component'
import { NormallayoutComponent } from 'src/app/shared/components/normallayout/normallayout.component';

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
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RegisterRoutingModule { }
