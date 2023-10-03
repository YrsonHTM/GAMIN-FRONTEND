import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';



@NgModule({
  declarations: [BarraLateralComponent],
  exports: [
    BarraLateralComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
