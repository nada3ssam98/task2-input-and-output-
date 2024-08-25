import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Data/IProduct';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  @Output() addedProduct = new EventEmitter<IProduct>()
  newProduct:IProduct = {
    name:'',
    description:'',
    price:0,
    image:'',
  }; 

 

 onAddProduct(){
  this.addedProduct.emit(this.newProduct)
 }

}
