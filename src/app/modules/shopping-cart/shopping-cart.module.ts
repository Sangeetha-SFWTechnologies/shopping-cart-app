import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ShoppingCartModule { }
