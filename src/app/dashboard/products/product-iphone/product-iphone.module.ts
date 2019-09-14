import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductIphoneRoutingModule } from './product-iphone-routing.module';
import { ProductIphoneComponent } from './product-iphone.component';


@NgModule({
  declarations: [ProductIphoneComponent],
  imports: [
    CommonModule,
    ProductIphoneRoutingModule
  ]
})
export class ProductIphoneModule { }
