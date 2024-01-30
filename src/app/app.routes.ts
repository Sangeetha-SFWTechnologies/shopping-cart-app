import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'', redirectTo: 'productList', pathMatch: 'full'
    },
    {
        path: 'products',
        loadChildren: ()=>
            import('./modules/product-list/product-list.module').then((m)=>m.ProductListModule)
    },
    {
        path: 'shopping-cart',
        loadChildren: ()=>
            import('./modules/shopping-cart/shopping-cart.module').then((m)=>m.ShoppingCartModule)
    }
];
