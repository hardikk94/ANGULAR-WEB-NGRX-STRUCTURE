import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelayoutComponent } from 'src/app/shared/components/homelayout/homelayout.component';
import { HelpComponent } from './components/help/help.component';
const routes: Routes = [{
  path: '',
  component: HomelayoutComponent,
  children: [{
    path: '',
    component: HelpComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HelpRoutingModule { }
