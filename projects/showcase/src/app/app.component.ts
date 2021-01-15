import { Component } from '@angular/core';
import { NgxFlowChartOptions } from 'projects/ngx-flow-charts/src/lib/charts/flow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showcase';

  data1 = [
    [{
      "name": "Draft",
      "color": "blue"
    }, {
      "name": "Ready",
      "color": "blue"
    },
    {
      "name": "Approved",
      "color": "blue"
    },
      "Activated"
    ],
    ["Ready", "Rejected"],
  ];

  connectors = [
    { "from": "Draft", "to": "Ready", "color": "blue" },
    { "from": "Ready", "to": "Approved", "color": "blue" },
  ]

  options: NgxFlowChartOptions = {
    node: {
      color: "red",
    },
  };

  // Next graph

  data2 = [
    ["Peter Q", "Gamora", "Nova Prime", "Rocket"],
    ["Drax", "Groot", "Rocket"],
    ["Merdith Q", "Groot"]
  ];

}
