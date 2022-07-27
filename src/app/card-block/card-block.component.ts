import {Component, OnInit} from '@angular/core';
import {CARDS} from "../cardList";
import {Card} from "../card";
import {Category} from "../nav-menu/nav-menu.component";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {


  products : Card[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}


  // The second part makes that the first one doesn't work anymore, it overwrites it
  // Need to find a way to make them work together
  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.products = this.filterList(CARDS, data["category"]);
    })

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {                                       // If navigation has been successful
          let searchString = val.url.replace("/products/All", "")       // get only the suffix
          this.products = this.filterListInput(CARDS, searchString)                         // Filter with suffix
      }
    })
    console.log("URL is " + this.router.url)
  }

  filterList(CARDS: Card[], category: Category) {
    if (category === Category.All) {
      return CARDS
    }
    return CARDS.filter(card => card.category === category)
  }

  filterListInput(CARDS: Card[], string: string) {
    let cardNames: string[] = [];     // same as CARDS but only the names
    let returnedCards: Card[] = [];   // The actual cards we return

    // Initialize a list with all the card's names
    for (let card of CARDS) {
      cardNames.push(card.name)
    }

    // For each card, if its name contains the string,
    // add it to the cards to return
    // If the string is empty, return all the cards
    for (let cardName of cardNames) {
      if (string === "") {
        returnedCards = CARDS;
        break;
      } else if (cardName.includes(string)) {
        // CARDS and CardNames have the same indexes, let's use them rather
        // than convert a string back to a Card
        let indexOfCard =  cardNames.indexOf(cardName);
        returnedCards.push(CARDS[indexOfCard]);
      }
    }
    return returnedCards;
  }
}
