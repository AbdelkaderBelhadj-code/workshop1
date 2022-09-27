import { Component, OnInit } from '@angular/core';
import {Product} from './../model/product';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list: Product[];
  constructor() { }
  ngOnInit(): void {
    this.title = 'MyStore App'
    this.list=[{
        id:12,
        name:'T-shirt 1',
        description:'nice T-shirt',
        price:100,
        nbrLike:12,
        quantity:3,
        picture:'https://www.exist.com.tn/81822-large_default/t-shirt-de-sport.jpg'
      },
      {id:12,
        name:'T-shirt 2',
        description:'nice T-shirt',
        price:100,
        nbrLike:12,
        quantity:0,
        picture:'https://www.exist.com.tn/70473-large_default/t-shirt.jpg'

      }
    ]
  }
  incerementLike(product:Product):void{
    let i = this.list.indexOf(product);
    if (i!=-1){
      this.list[i].nbrLike++
    }
  }
  buyProduct(product:Product):void{
    let i = this.list.indexOf(product);
    if (i!=-1){
      this.list[i].quantity--
    }
  }


}
