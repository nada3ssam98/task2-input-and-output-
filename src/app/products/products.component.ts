import { Component, Input } from '@angular/core';
import { IProduct } from '../Data/IProduct';
import { ChangeBackgroundDirective } from '../Directive/change-background.directive';
import { ChangeColorDirective } from '../Directive/change-color.directive';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ChangeBackgroundDirective,ChangeColorDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input({required:true}) product:IProduct
}
