import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomelayoutComponent } from './components/homelayout/homelayout.component';
import { NormallayoutComponent } from './components/normallayout/normallayout.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { LoaderComponent } from './components/loader/loader.component'

@NgModule({
  declarations: [
    HomelayoutComponent,
    NormallayoutComponent,
    SiderbarComponent,
    HeaderComponent,
    FooterComponent,
    ImageViewerComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    HomelayoutComponent,
    ImageViewerComponent,
    HeaderComponent,
    FooterComponent,
    SiderbarComponent,
    NormallayoutComponent,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ShareModule { }
