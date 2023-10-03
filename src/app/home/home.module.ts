import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
    ButtonModule
  ]
})
export class HomeModule { }
