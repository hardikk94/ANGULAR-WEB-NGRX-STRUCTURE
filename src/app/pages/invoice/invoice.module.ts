import { NgModule } from '@angular/core';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    InvoiceComponent
  ],
  imports: [
    SharedModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
