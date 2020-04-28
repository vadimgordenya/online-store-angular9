import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  orders = []
  pSub: Subscription
  rSub: Subscription

  constructor(
    private orderSer: OrderService
  ) { }

  ngOnInit(): void {
    this.pSub = this.orderSer.getAll().subscribe(orders => {
      this.orders = orders
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.rSub) {
      this.rSub.unsubscribe()
    }
  }

  remove(id) {
    this.rSub = this.orderSer.remove(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== id)
    })
  }

}
