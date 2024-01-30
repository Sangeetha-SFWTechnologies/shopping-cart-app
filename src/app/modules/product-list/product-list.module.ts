import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from './product-list.routing.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ProductListModule { }
