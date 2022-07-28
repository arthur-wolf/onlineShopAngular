import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  menuElements : Category[] = [
    Category.all,
    Category.bread,
    Category.dairy,
    Category.fruits,
    Category.seasonings,
    Category.vegetables
  ];

  searchString: string = "";
  selectedCategory: Category | undefined = Category.all;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}



  ngOnInit(): void {
    this.selectCategory(Category.all);
  }

  // To move when the user clicks on a category in the menu
  selectCategory(category: Category): void {
    this.selectedCategory = category
    this.router.navigate(
      ["/products"],
      {
        relativeTo: this.route,
        queryParams:{category: category},
        queryParamsHandling: "merge",
      }).then(() => "")
   }

  // To update the value of the query in the url when the user writes something in the field and to go there
  updateValue(input : string): void {
    this.searchString = input;
    this.router.navigate(
      ["/products"],
      {
        relativeTo: this.route,
        queryParams:{query: this.searchString},
        queryParamsHandling: "merge",
      })
      .then(() => "")
  }
}

export enum Category {
  all = "All",
  bread = "Bread",
  dairy = "Dairy",
  fruits = "Fruits",
  seasonings = "Seasonings",
  vegetables = "Vegetables"
}
