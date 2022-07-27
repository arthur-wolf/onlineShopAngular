import { Component, OnInit } from '@angular/core';
import {AppComponent}  from "../app.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = AppComponent.getTitle();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToWelcomePage() {
    this.router.navigate(
      [""],
      {relativeTo: this.route}).then(() => "")
  }
}


