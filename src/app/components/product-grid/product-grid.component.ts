import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/model/products.model';
import footwear from '../../../assets/products/footwear.json';
@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
 // allImages: Observable<ImageBitmap[]>;
  products: Products[]=footwear;
  constructor() { }
  
  ngOnInit(): void {
  }

}
