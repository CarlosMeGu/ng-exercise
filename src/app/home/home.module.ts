
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule

  ],
  declarations: [
  ]
})
export class HomeModule { }