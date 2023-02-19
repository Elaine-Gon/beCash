import { MatDialogModule } from '@angular/material/dialog';
import { NewTransactionModalModule } from 'src/app/components/new-transaction-modal/new-transaction-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    NewTransactionModalModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
