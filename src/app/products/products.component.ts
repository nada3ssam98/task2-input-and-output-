import { Component, Input } from '@angular/core';
import { IProduct } from '../Data/IProduct';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input({required:true}) product:IProduct
}
