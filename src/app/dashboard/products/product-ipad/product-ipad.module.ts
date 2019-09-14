import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductIpadRoutingModule } from './product-ipad-routing.module';
import { ProductIpadComponent } from './product-ipad.component';


@NgModule({
  declarations: [ProductIpadComponent],
  imports: [
    CommonModule,
    ProductIpadRoutingModule
  ]
})
export class ProductIpadModule { }
