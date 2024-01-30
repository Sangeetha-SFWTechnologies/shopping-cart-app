import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  // standalone: true,
  // imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductService, ShoppingCartService]
})
export class ProductListComponent implements OnInit{
  
  allProducts: ProductModel[] = [];
  productById: any;

  constructor(private productService: ProductService, 
    private shoppingCartService: ShoppingCartService){

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.allProducts = this.productService.getProducts();
  }

  getProductById(id:number){
    this.productById = this.productService.getProductById(id);
  }

  addToCart(product:ProductModel):void{
    this.shoppingCartService.addToCart(product);
  }

}
