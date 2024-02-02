import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/cart-item';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CallTracker } from 'assert';

@Component({
  selector: 'app-checkout',
  // standalone: true,
  // imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{ 

  cartItems: CartItemModel[] = [];
  totalPrice: any = 0;
  itemPrice : any = 0;
  constructor(public shoppingCartService: ShoppingCartService){}

  ngOnInit(){
    this.getCartItems();
    this.getTotalPrice();
  }

  getCartItems(){
   this.cartItems = this.shoppingCartService.getCartItems(); 
  }

  getTotalPrice(){
    // const prices = this.cartItems.map(data=>data.price);
    // // this.totalPrice = prices.reduce((a:any,b:any)=>a+b);
    // console.log(prices);
    // prices.forEach((price)=>{
    //   this.totalPrice = this.totalPrice + price;
    // });
    this.totalPrice = this.shoppingCartService.getTotal();
  }

}
