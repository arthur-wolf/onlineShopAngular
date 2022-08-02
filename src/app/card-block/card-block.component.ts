import {Component, OnInit} from '@angular/core';
import {CARDS} from "../cardList";
import {Card} from "../card";
import {Category} from "../nav-menu/nav-menu.component";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  products : Card[] | undefined;
  productsAddedToCart: Card[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(query => {
      this.products = this.filterProducts(CARDS, query["category"], query["query"]);
    })

  }


  filterProducts(CARDS: Card[], category: Category, query: string): Card[] {
    let categoryFiltered = this.filterProductsByCategory(CARDS, category);
    console.log(this.filterProductsByString(categoryFiltered, query).map(c => c.name))
    return this.filterProductsByString(categoryFiltered, query)
  }

  filterProductsByCategory(CARDS: Card[], category: Category) {
    if (category === Category.all || category === undefined) {
      return CARDS
    }
    return CARDS.filter(card => card.category === category)
  }

  filterProductsByString(CARDS: Card[], searchString: string) {
    if (searchString === "" || searchString === undefined) {
      return CARDS;
    }
    return CARDS
      .filter(card => card.name.toLowerCase().includes(searchString.toLowerCase()));
  }

  addToCart(product: Card) {
    this.cartService.addProductToCart(product)
    this.productsAddedToCart.push(product);
    console.log(`
    ${product.name} has been added to the cart. Cart contains :${this.productsAddedToCart.map(c => c.name)}.`)
  }
}
