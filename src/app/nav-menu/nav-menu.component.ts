import { Component, OnInit } from '@angular/core';
import {range} from "rxjs";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  menuElements : Field[] = [
    Field.All,
    Field.Bread,
    Field.Dairy,
    Field.Fruits,
    Field.Seasonings,
    Field.Vegetables
  ];

  selectedField : Field | undefined = Field.All;


  constructor() {
  }

  ngOnInit(): void {
    this.selectField(Field.All)
  }



  selectField(field: Field): void {
    this.selectedField = field
    console.log(`You clicked on ${(this.selectedField)}`)
  }
}

export enum Field {
  All = "All",
  Bread = "Bread",
  Dairy = "Dairy",
  Fruits = "Fruits",
  Seasonings = "Seasonings",
  Vegetables = "Vegetables"
}
