import { Injectable } from '@angular/core';
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

  getTotal(): number {
    return items.reduce((total, item) => total + this.getItemPrice(item), 0);
  }

  getItemPrice(item: CartItemModel): number {
    return (item.price ?? 0) * (item.quantity ?? 0);
  }

  removeFromCart(productId: number, removeBtn:number): void{
  //  items = items.filter((item) => item.id !== productId);
  // let index = items.findIndex((item)=>item.id === productId);
  // items.splice(index,1);
  const index = items.findIndex(item => item.id === productId);

    if (index !== -1 && removeBtn === 0) {
      const currentItem = items[index];
      if ((currentItem.quantity ?? 0) > 1) {
        currentItem.quantity = (currentItem.quantity ?? 0) - 1;
      } else {
        items.splice(index, 1);
      }
    }
    else{
      items.splice(index, 1);
    }
  }
}
