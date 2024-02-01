import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './modules/product-list/product-list.component';


const routes: Routes = [
  
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
