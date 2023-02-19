import { TransctionsTableModule } from './../../components/transctions-table/transctions-table.module';
import { SummaryModule } from './../../components/summary/summary.module';
import { HeaderModule } from './../../components/header/header.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NewTransactionModalModule } from 'src/app/components/new-transaction-modal/new-transaction-modal.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SummaryModule,
    TransctionsTableModule,
    NewTransactionModalModule
  ],
  exports: [
    DashboardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
