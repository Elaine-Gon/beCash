import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTransactionModalComponent } from './new-transaction-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NewTransactionModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    NewTransactionModalComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NewTransactionModalModule { }
