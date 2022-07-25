import { Card } from "./card";
import {Field} from "./nav-menu/nav-menu.component";

export const CARDS: Card[] = [
  {
    img: "../assets/cards-images/Apple.png",
    name: "Apple",
    price: 1.25,
    field: Field.Fruits
  },
  {
    img: "../assets/cards-images/Avocado.png",
    name: "Avocado",
    price: 1.75,
    field: Field.Fruits
  },
  {
    img: "../assets/cards-images/Banana.png",
    name: "Banana",
    price: 1.75,
    field: Field.Fruits
  },
  {
    img: "../assets/cards-images/Bread.png",
    name: "Baguette",
    price: 3.00,
    field: Field.Bread
  },
  {
    img: "../assets/cards-images/Brioche.jpg",
    name: "Brioche",
    price: 3.00,
    field: Field.Bread
  },
  {
    img: "../assets/cards-images/Spinach.png",
    name: "Spinach",
    price: 2.50,
    field: Field.Vegetables
  },
  {
    img: "../assets/cards-images/Lettuce.jpg",
    name: "Lettuce",
    price: 2.50,
    field: Field.Vegetables
  },
  {
    img: "../assets/cards-images/Tomato.png",
    name: "Tomato",
    price: 1.50,
    field: Field.Fruits
  },
  {
    img: "../assets/cards-images/Camembert.jpg" +
      "",
    name: "Camembert",
    price: 2.50,
    field: Field.Dairy
  },
  {
    img: "../assets/cards-images/Brie.jpg",
    name: "Brie",
    price: 2.50,
    field: Field.Dairy
  },
  {
    img: "../assets/cards-images/Paprika.jpg",
    name: "Paprika",
    price: 2.50,
    field: Field.Seasonings
  },
  {
    img: "../assets/cards-images/Oregano.jpg",
    name: "Oregano",
    price: 2.50,
    field: Field.Seasonings
  },
]
