import { Injectable } from '@angular/core';
import {Card} from "./card";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productsAddedToCart: Card[] = [];
  private totalPrice: number = 0;

  constructor() { }

  addProductToCart(product: Card) {
    let foundProduct = false;

    // Check if the product we want to add is already in the list
    for (let item of this.productsAddedToCart) {
      // If yes, just increment its quantity
      if (item.name === product.name && !foundProduct)  {
        product.quantity ++;
        foundProduct = true;
      }
    }

    if (!foundProduct) { // The product has not been found in the list, we can add it
      this.productsAddedToCart.push(product);
    }
    this.updateTotalPrice()
  }

  getProductsInCart () : Card[] {
    return this.productsAddedToCart;
  }

  updateTotalPrice() {
    let newPrice = 0;
    for (let item of this.productsAddedToCart) {
      newPrice += item.price! * item.quantity;
    }
    this.totalPrice = newPrice
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}
