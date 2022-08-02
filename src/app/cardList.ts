import { Card } from "./card";
import {Category} from "./nav-menu/nav-menu.component";

export const CARDS: Card[] = [
  {
    img: "../assets/cards-images/Apple.png",
    name: "Apple",
    price: 1.25,
    category: Category.fruits,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Avocado.png",
    name: "Avocado",
    price: 1.75,
    category: Category.fruits,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Banana.png",
    name: "Banana",
    price: 1.75,
    category: Category.fruits,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Bread.png",
    name: "Baguette",
    price: 3.00,
    category: Category.bread,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Brioche.jpg",
    name: "Brioche",
    price: 3.00,
    category: Category.bread,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Spinach.png",
    name: "Spinach",
    price: 2.50,
    category: Category.vegetables,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Lettuce.jpg",
    name: "Lettuce",
    price: 2.50,
    category: Category.vegetables,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Tomato.png",
    name: "Tomato",
    price: 1.50,
    category: Category.fruits,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Camembert.jpg" +
      "",
    name: "Camembert",
    price: 2.50,
    category: Category.dairy,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Brie.jpg",
    name: "Brie",
    price: 2.50,
    category: Category.dairy,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Paprika.jpg",
    name: "Paprika",
    price: 2.50,
    category: Category.seasonings,
    quantity: 1,
  },
  {
    img: "../assets/cards-images/Oregano.jpg",
    name: "Oregano",
    price: 2.50,
    category: Category.seasonings,
    quantity: 1,
  },
]
