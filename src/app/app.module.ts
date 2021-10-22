import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TradesComponent } from './trades/trades.component';
import { BalanceComponent } from './balance/balance.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MenuComponent } from './menu/menu.component';
import {
	IgxCategoryChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";
 import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EditTradesComponent } from './edit-trades/edit-trades.component';

@NgModule({
  declarations: [
    AppComponent,
    TradesComponent,
    BalanceComponent,
    MenuComponent,
    EditTradesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
   	BrowserAnimationsModule,
    IgxCategoryChartModule,
    IgxLegendModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
