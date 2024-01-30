import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : ProductModel[] = [
    { "id": 1, "name": "Product A", "price": 19.99, "description": "Description A", "imageUrl": "../../assets/images/img1.jpg" }, 

    { "id": 2, "name": "Product B", "price": 29.99, "description": "Description B", "imageUrl": "../../assets/images/img2.jpg" },
    
    { "id": 3, "name": "Product C", "price": 39.99, "description": "Description C", "imageUrl": "../../assets/images/img3.jpg" },

    { "id": 4, "name": "Product D", "price": 49.99, "description": "Description D", "imageUrl": "../../assets/images/img4.jpg" },

    { "id": 5, "name": "Product E", "price": 59.99, "description": "Description E", "imageUrl": "../../assets/images/img5.jpg" },

    { "id": 6, "name": "Product F", "price": 69.99, "description": "Description F", "imageUrl": "../../assets/images/img1.jpg" },

    { "id": 7, "name": "Product G", "price": 79.99, "description": "Description G", "imageUrl": "../../assets/images/img4.jpg" },

    { "id": 8, "name": "Product H", "price": 89.99, "description": "Description H", "imageUrl": "../../assets/images/img5.jpg" },

    { "id": 9, "name": "Product I", "price": 99.99, "description": "Description I", "imageUrl": "../../assets/images/img1.jpg" },
  ]

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products.find(
      (prod) => prod.id === id
    );
    return product!;
  }

  constructor() { }
}
