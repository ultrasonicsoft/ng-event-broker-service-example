import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductIphoneComponent } from './product-iphone.component';

const routes: Routes = [{ path: '', component: ProductIphoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductIphoneRoutingModule { }
