import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItemModel } from '../../models/cart-item';

@Component({
  selector: 'app-shopping-cart',
  // standalone: true,
  // imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {

  cartItems:CartItemModel[]=[];
  totalPrice:any = 0;

  constructor(private shoppingCartService: ShoppingCartService){

  }
  ngOnInit(): void {
    this.getCartItems();
    this.getTotalPrice();
  }

  getCartItems(){
     this.cartItems = this.shoppingCartService.getCartItems();
  }

  getTotalPrice(){
    const prices = this.cartItems.map(data=>data.price);
    // this.totalPrice = prices.reduce((a:any,b:any)=>a+b);
    console.log(prices);
    prices.forEach((price)=>{
      this.totalPrice = this.totalPrice + price;
    });
    console.log(this.totalPrice);
  }

  cancelItem(item:any, removeBtn:number){
    this.shoppingCartService.removeFromCart(item.id, removeBtn);
    console.log(item);
    this.getCartItems();
    this.totalPrice = this.totalPrice - item.price;    
  }

  incrementQuantity(item: CartItemModel): void {
    item.quantity = (item.quantity ?? 0) + 1;
    // this.getTotalPrice();
    this.totalPrice = this.totalPrice + item.price;
  }

  decrementQuantity(item: CartItemModel): void {
    if ((item.quantity ?? 0) > 1) {
      item.quantity = (item.quantity ?? 0) - 1;
    } else {
      this.cancelItem(item.id,0);
    }
    this.totalPrice = this.totalPrice - (item.price ?? 0);
  }
}
