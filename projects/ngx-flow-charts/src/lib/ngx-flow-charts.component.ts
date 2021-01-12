import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DiFlowChart, NgxFlowChartOptions } from './charts/flow';
import { DiGraph } from './charts/graph';

@Component({
  selector: 'ngx-flow-charts',
  template: `<canvas #canvas  [attr.width]="calculatedWidth" [attr.height]="calculatedHeight"></canvas>`,
  styles: [':host{ height:100%; width: 100%; display: inline-block; }']
})
export class NgxFlowChartsComponent implements OnInit {

  @ViewChild("canvas")
  canvas;

  @Input()
  data: any;

  @Input()
  options: NgxFlowChartOptions;

  @Input()
  connectors: any;

  @Input()
  width: string = "800";

  @Input()
  height: string = "300";

  calculatedWidth: string;

  calculatedHeight: string;

  constructor() { }

  ngOnInit() {
    this.draw();
    setTimeout(() => {
      var graph = new DiGraph();
      graph.addPaths(this.data);
      graph.setSelectedConnections(this.connectors);
      new DiFlowChart(this.canvas.nativeElement, graph, this.options).draw();
    });
  }

  draw() {
    const ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');

    this.calculatedHeight = this.height;
    this.calculatedWidth = this.width;

    if (this.width.slice(-1) === "%") {
      const value = Number.parseInt(this.width.slice(0, -1));
      this.calculatedWidth = `${value * this.canvas.nativeElement.parentElement.offsetWidth / 100}`;
    }

    if (this.height.slice(-1) === "%") {
      const value = Number.parseInt(this.height.slice(0, -1));
      this.calculatedHeight = `${value * this.canvas.nativeElement.parentElement.offsetHeight / 100}`;
    }

    console.log("canvas size: ", ctx.canvas.width, ctx.canvas.height);
  }

}
