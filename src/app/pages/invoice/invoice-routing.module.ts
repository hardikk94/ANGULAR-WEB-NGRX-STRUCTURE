import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelayoutComponent } from 'src/app/shared/components/homelayout/homelayout.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [{
  path: '',
  component: HomelayoutComponent,
  children: [{
    path: '',
    component: InvoiceComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class InvoiceRoutingModule { }
