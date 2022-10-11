import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from '../app/product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day9';
  products:Product[];
  productService;

  constructor(){
    this.productService=new ProductService();
  }

  getProducts() {
    
    this.products=this.productService.getProducts();
  }
}
