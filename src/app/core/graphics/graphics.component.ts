import { Component, OnInit, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
declare let d3: any;

@Component({
  selector: 'bt-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit, OnChanges {

  options = {};
  data = [];
  chartType;

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'Time (ms)'
        },
        yAxis: {
          axisLabel: 'Voltage (v)',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -10
        }
      }
    };
    this.data = this.sinAndCos();
  }

  ngOnChanges() {
  }

  sinAndCos() {
    const sin = [], sin2 = [], cos = [];

    for (let i = 0; i < 100; i++) {
      sin2.push({x: i, y: i % 10 === 5 ? null : Math.sin(i / 10) * 0.25 + 0.5});
    }

    return [
      {
        values: sin2,
        key: 'Transactions',
        color: '#ff7f0e',
        area: true
      }
    ];
  }
}
