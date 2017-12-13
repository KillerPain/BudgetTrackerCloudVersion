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
import { AuthService } from './auth/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FileComponent } from './file/file.component';
import { FormComponent } from './core/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    MaterialModule
  ],
  providers: [AuthService],
  entryComponents: [FileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
