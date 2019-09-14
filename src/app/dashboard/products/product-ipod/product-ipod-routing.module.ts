import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductIpodComponent } from './product-ipod.component';

const routes: Routes = [{ path: '', component: ProductIpodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductIpodRoutingModule { }
