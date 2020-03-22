
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    RouterModule

  ],
  declarations: [
  ]
})
export class HomeModule { }
