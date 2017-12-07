import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvD3Module } from 'ng2-nvd3';

import { MainRoutingModule } from './main-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RatingsComponent } from './ratings/ratings.component';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material/material.module';
import { SidenavService } from './sidenav/sidenav.service';
import { CoreComponent } from '../core/core.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { GraphicsComponent } from '../core/graphics/graphics.component';

import 'd3';
import 'nvd3';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    NvD3Module
  ],
  declarations: [SidenavComponent, RatingsComponent, MainComponent, CoreComponent, ModalComponent, ProfileComponent, GraphicsComponent],
  exports: [SidenavComponent, RatingsComponent, MainComponent, CoreComponent, ModalComponent, ProfileComponent, GraphicsComponent],
  providers: [SidenavService]
})
export class MainModule { }
