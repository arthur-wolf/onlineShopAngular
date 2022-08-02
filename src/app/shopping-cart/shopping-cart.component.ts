import { Component, OnInit } from '@angular/core';
import {Card} from "../card";
import { CartService} from "../cart.service"


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productsInCart: Card[] = [];
  totalPrice: number = 0;


  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProductsInCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  addToQuantity (product: Card) {
    product.quantity ++
    this.updatePrice()
  }

  removeToQuantity (product: Card) {
    if (product.quantity - 1 >= 0) {
      product.quantity --
      this.updatePrice()
    }
  }

  updatePrice() {
    let newPrice = 0;
    for (let item of this.productsInCart) {
      newPrice += item.price! * item.quantity;
    }
    this.totalPrice = newPrice
  }
}
