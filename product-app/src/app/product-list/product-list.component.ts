import { Component, OnInit } from '@angular/core';
import { products } from '../Models/product';
import { DemoProduct } from '../Models/Demo_Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : products[];

  constructor() {

  }


  ngOnInit(): void {
    this.products = DemoProduct;
  }

}
