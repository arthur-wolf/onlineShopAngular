import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  menuElements : Category[] = [
    Category.All,
    Category.Bread,
    Category.Dairy,
    Category.Fruits,
    Category.Seasonings,
    Category.Vegetables
  ];

  selectedCategory : Category | undefined = Category.All;


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectCategory(Category.All)
    console.log("tttt" + this.router.url);

  }

  selectCategory(category: Category): void {
    this.selectedCategory = category
    console.log(`You clicked on ${(this.selectedCategory)}`)

    this.router.navigate(
      ['products/' + this.selectedCategory],
      {relativeTo: this.route}).then(() => "")
   }
}

export enum Category {
  All = "All",
  Bread = "Bread",
  Dairy = "Dairy",
  Fruits = "Fruits",
  Seasonings = "Seasonings",
  Vegetables = "Vegetables"
}
