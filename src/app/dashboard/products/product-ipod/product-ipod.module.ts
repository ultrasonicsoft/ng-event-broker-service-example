import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductIpodRoutingModule } from './product-ipod-routing.module';
import { ProductIpodComponent } from './product-ipod.component';


@NgModule({
  declarations: [ProductIpodComponent],
  imports: [
    CommonModule,
    ProductIpodRoutingModule
  ]
})
export class ProductIpodModule { }
