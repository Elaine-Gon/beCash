import { TransctionsTableModule } from './../../components/transctions-table/transctions-table.module';
import { SummaryModule } from './../../components/summary/summary.module';
import { HeaderModule } from './../../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SummaryModule,
    TransctionsTableModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
