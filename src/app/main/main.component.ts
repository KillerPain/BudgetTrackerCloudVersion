import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidenavService } from './sidenav/sidenav.service';

@Component({
  selector: 'bt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('slideIn', [
      state('inactive',
        style({
          left: '-400%'
        }),
      ),
      state('active', style({
        left: '0'
      })),
      transition('inactive => active', animate('.3s ease-in')),
      transition('active => inactive', animate('.3s ease-out'))
    ])
  ]
})
export class MainComponent implements OnInit {

  state = '';

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.isActive.subscribe((data) => {
      this.state = (data ? 'inactive' : 'active');
    });
  }

  showSideNav() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}
