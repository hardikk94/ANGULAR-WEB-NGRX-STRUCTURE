import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomelayoutComponent } from './components/homelayout/homelayout.component';
import { NormallayoutComponent } from './components/normallayout/normallayout.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    HomelayoutComponent,
    NormallayoutComponent,
    SiderbarComponent,
    HeaderComponent,
    FooterComponent,  
  ],
  imports: [
    CommonModule,  
    RouterModule
  ],
  exports: [
    CommonModule,
    HomelayoutComponent,
    HeaderComponent,
    FooterComponent,
    SiderbarComponent,
    NormallayoutComponent,       
  ]
})
export class ShareModule { }
