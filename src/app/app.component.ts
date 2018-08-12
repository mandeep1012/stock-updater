import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-updater' ;
  stock1 = 50;
  stock2 = 40;
  stock3 = 30;
  // x = document.getElementById(inputbox);

   check() {
    if (this.stock1 > 0) {
      this.stock1 = this.stock1 - 10;
}
}
}

