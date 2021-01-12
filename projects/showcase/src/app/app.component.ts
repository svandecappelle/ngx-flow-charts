import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showcase';

  data1 = [
    ["Peter Q", "Gamora", "Nova Prime", "Rocket"],
    ["Drax", "Groot", "Rocket"],
    ["Merdith Q", "Groot"]
  ];
}
