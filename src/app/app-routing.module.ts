import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  {
    path: "products/:category:searchString",
    component:BodyComponent
  },
  {
    path: "products/:category",
    component: BodyComponent
  },
  {
    path: "products",
    component: BodyComponent
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent
  },
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "",
    redirectTo: "/welcome",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
