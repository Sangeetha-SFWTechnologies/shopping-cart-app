import { Injectable } from '@angular/core';
// import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
// import { ProductModel } from '../models/product.model';
import { CartItemModel } from '../models/cart-item';

let items: CartItemModel[] = [];

@Injectable({
  providedIn: 'root'
})


export class ShoppingCartService {

  constructor() { }

  getCartItems(){
    return items;
  }

  addToCart(product: CartItemModel):void{
    // items.push(product);
    const existingItem = items.find(item => item.id === product.id);
    
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity ?? 0) + 1;
        // existingItem.count = (existingItem.count ?? 0) + 1;
      } else {
        const newItem: CartItemModel = { ...product, quantity: 1 };
        items.push(newItem);
      }
  }

  removeFromCart(productId: number): void{
  //  items = items.filter((item) => item.id !== productId);
  // let index = items.findIndex((item)=>item.id === productId);
  // items.splice(index,1);
  const index = items.findIndex(item => item.id === productId);

    if (index !== -1) {
      const currentItem = items[index];
      if ((currentItem.quantity ?? 0) > 1) {
        currentItem.quantity = (currentItem.quantity ?? 0) - 1;
      } else {
        items.splice(index, 1);
      }
    }
  }
}
