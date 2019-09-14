import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: 'ipad',
      loadChildren: () => import('./product-ipad/product-ipad.module').then(m => m.ProductIpadModule)
    },
    {
      path: 'iphone',
      loadChildren: () => import('./product-iphone/product-iphone.module').then(m => m.ProductIphoneModule)
    },
    {
      path: 'ipod',
      loadChildren: () => import('./product-ipod/product-ipod.module').then(m => m.ProductIpodModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
