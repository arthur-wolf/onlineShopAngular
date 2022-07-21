import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static title = 'ONLINE SHOP';


  static getTitle():string {
    return this.title;
  }


}
