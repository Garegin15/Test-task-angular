import { BalanceComponent } from './balance/balance.component';
import { EditTradesComponent } from './edit-trades/edit-trades.component';
import { TradesComponent } from './trades/trades.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TradesComponent
  },
  {
    path: 'page/edit',
    component: EditTradesComponent
  },
  {
    path: 'page/balance',
    component: BalanceComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
