import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartProducts = []
  totalPrice = 0

  constructor(
    private productServ: ProductService
  ) { }

  ngOnInit(): void {
    this.cartProducts = this.productServ.cartProducts

    this.totalPrice = this.cartProducts.reduce((sum, current) => {
      return sum + +current.price
    }, 0)
  }
}
