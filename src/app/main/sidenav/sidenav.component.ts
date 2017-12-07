import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'bt-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  form: any[];
  show = true;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
  }

  escape() {
    this.sidenavService.change(this.show);
  }
}
