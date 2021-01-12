import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DiFlowChart } from './charts/flow';
import { DiGraph } from './charts/graph';

@Component({
  selector: 'ngx-flow-charts',
  template: `
    <div>
      <canvas #canvas width="500" height="300"></canvas>
    </div>
  `,
  styles: []
})
export class NgxFlowChartsComponent implements OnInit {

  @ViewChild("canvas")
  canvas: ElementRef<HTMLCanvasElement>;

  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
    var graph = new DiGraph();
    graph.addPaths(this.data);
    new DiFlowChart(this.canvas.nativeElement, graph).draw();
  }

}
