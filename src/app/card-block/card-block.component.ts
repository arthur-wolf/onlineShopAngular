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
    this.route.params.subscribe(data => {
      this.products = this.filterList(CARDS, data["category"]);
    })
  }

  public filterList(CARDS: Card[], category: Category) {
    if (category === Category.All) {
      return CARDS
    }
    return CARDS.filter(card => card.category === category)

  }
}
