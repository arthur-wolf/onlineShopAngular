import {Category} from "./nav-menu/nav-menu.component"

export class Card {
  img: string | undefined;
  name!: string;
  price: number | undefined;
  category: Category | undefined;
}
