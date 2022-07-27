import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "products/All:searchString", component:BodyComponent},
  { path: "products/:category", component: BodyComponent},
  { path: "products", redirectTo: "products/All", pathMatch: "full"},
  { path: "welcome", component: WelcomeComponent},
  { path: "", redirectTo: "/welcome", pathMatch: "full"},
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
