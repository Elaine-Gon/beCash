import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransctionsTableComponent } from './transctions-table.component';


@NgModule({
  declarations: [
    TransctionsTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TransctionsTableComponent
  ]
})
export class TransctionsTableModule { }
