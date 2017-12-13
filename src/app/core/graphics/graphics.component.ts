import { Component, OnInit, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProfileService } from '../../shared/profile/profile.service';
import { setInterval } from 'timers';
declare let d3: any;

@Component({
  selector: 'bt-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit, OnChanges, OnDestroy {

  options = {};
  data = [];
  chartType;
  transactions = [];

  constructor(private service: ProfileService) { }

  ngOnInit() {
    console.log("initing");
    console.log(this.options);
    console.log(this.data);
    this.options = {};
    this.data = [];
    setInterval(
      () => {
        this.getData();
      }, 1000
    );
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
          axisLabel: 'Time (day)'
        },
        yAxis: {
          axisLabel: 'Price ($)',
          tickFormat: function(d){
            return d3.format('.2f')(d);
          },
          axisLabelDistance: -10
        }
      }
    };
    setInterval(() => {
      this.data = this.sinAndCos();
    }, 1000);
    this.data = this.sinAndCos();
  }

  ngOnChanges() {
  }

  sinAndCos() {
    let sin = [], sin2 = [], cos = [];
    if (this.transactions.length > 1) {
      sin2 = this.transactions;
      return [
        {
          values: sin2,
          key: 'Transactions',
          color: '#ff7f0e',
          area: true
        }
      ];
    }
    for (let i = 1; i < 32; i++) {
      sin2.push({x: i, y: 0});
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

  ngOnDestroy() {
    console.log("destroying");
    console.log(this.options);
    console.log(this.data);
    this.options = {};
    this.data = [];
    console.log(this.options);
    console.log(this.data);
  }

  getData() {
    for (let i = 1; i < 32; i++) {
      this.transactions.push({x: i, y: 0});
    }
    const today = new Date();
    this.service.getTransactions().subscribe((data: any) => {
      for (let i = 0; i < data.length; i ++) {
        this.transactions.push({x: today.getDate() , y: parseInt(data[i].price)});
      }
    });
  }
}
