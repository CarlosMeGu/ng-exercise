import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [AppComponent, HomeComponent, LandingComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, CoreModule,  HttpClientModule],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}

