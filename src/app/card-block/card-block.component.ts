import { Component, OnInit } from '@angular/core';
import {CARDS} from "../cardList";
import {Card} from "../card";

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  products : Card[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.products = CARDS;
  }
}
