import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'', redirectTo: 'product-list', pathMatch: 'full'
    },
    {
        path: 'product-list',
        loadChildren: ()=>
            import('./modules/product-list/product-list.module').then((m)=>m.ProductListModule)
    },
    {
        path: 'shopping-cart',
        loadChildren: ()=>
            import('./modules/shopping-cart/shopping-cart.module').then((m)=>m.ShoppingCartModule)
    },
    {
        path: 'checkout',
        loadChildren: ()=>
            import('./modules/checkout/checkout.module').then((m)=>m.CheckoutModule)
    }
];
