import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(productID: number, name: string, price: number) {
    this.productID=productID;
    this.name=name;
    this.price=price;
  }
  productID:number ;
  name: string ;
  price:number;


  ngOnInit(): void {
  }

}
