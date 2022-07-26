import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from "./body/body.component";

const routes: Routes = [
  { path: "products", component: BodyComponent},
  { path: "products/:category", component: BodyComponent},
  { path: "", redirectTo: "products", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
