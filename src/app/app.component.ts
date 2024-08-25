import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRODUCTS } from './Data/db';
import { ProductsComponent } from "./products/products.component";
import { AddProductComponent } from "./add-product/add-product.component";
import {IProduct} from './Data/IProduct'
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, ProductsComponent, AddProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task3';

  products:IProduct[]=[]

  addToProduct(newProduct:IProduct){
    this.products.push(newProduct)
  }
}
