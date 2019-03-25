import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NormallayoutComponent } from 'src/app/shared/components/normallayout/normallayout.component';
import { ForgotComponent } from './components/forgot.component';

const routes: Routes = [{
  path: '',
  component: NormallayoutComponent,
  children: [{
    path: '',
    component: ForgotComponent
  }]
}]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ForgotRoutingModule { }
