import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  menuElements = [
    "All Categories",
    "Bread",
    "Dairy",
    "Fruits",
    "Seasonings / Spices",
    "Vegetables"
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.selectField("TOUT MGL")
  }

  selectField(fieldName: string) {
    console.log(`You clicked on ${fieldName}`)
  }
}

