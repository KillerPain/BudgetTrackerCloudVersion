import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { MainModule } from './main/main.module';
import { MaterialModule } from './material/material.module';
import { CoreComponent } from './core/core.component';
import { GraphicsComponent } from './core/graphics/graphics.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
