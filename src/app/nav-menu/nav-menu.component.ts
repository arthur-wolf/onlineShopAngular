import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';


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

  searchString: string = "";
  selectedCategory: Category | undefined = Category.All;


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  selectCategory(category: Category): void {
    this.selectedCategory = category
    console.log(`You clicked on ${(this.selectedCategory)}`)

    this.router.navigate(
      ["/products/" + this.selectedCategory],
      {relativeTo: this.route}).then(() => "")
   }

  updateValue(input : string) {
    this.searchString = input
    if (input === ""){                                            // Attempt to unmake the buggy part
      this.router.navigate(                                       // Doesn't quite work but will be fixed
        ["/products/All"],
        {relativeTo: this.route}).then(() => "")
    } else {
      this.router.navigate(
        ["/products/All" + this.searchString],
        {relativeTo: this.route}).then(() => "")
      console.log(`Query is ${input}`)
    }
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
