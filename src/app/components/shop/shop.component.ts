import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products.model';
import footwear from '../../../assets/products/footwear.json';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Products[]=footwear;
  constructor() { }

  ngOnInit(): void {
  }

}
