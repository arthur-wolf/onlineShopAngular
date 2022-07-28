import {Component, OnInit} from '@angular/core';
import {CARDS} from "../cardList";
import {Card} from "../card";
import {Category} from "../nav-menu/nav-menu.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  products : Card[] | undefined;

  constructor(
    private route: ActivatedRoute,
  ) {}



  ngOnInit(): void {
    this.route.queryParams.subscribe(query => {
      console.log(query["query"])
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
}
