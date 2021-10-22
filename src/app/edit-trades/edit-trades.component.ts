import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-trades',
  templateUrl: './edit-trades.component.html',
  styleUrls: ['./edit-trades.component.css']
})
export class EditTradesComponent implements OnInit {

  public formValue: any;

  constructor() { }

  ngOnInit(): void {
    this.formValue = JSON.parse(localStorage.getItem('form-data') || "");
  }

  getDatePeriod(exit: any, entry: any) {
    const time = new Date(exit).getTime() - new Date(entry).getTime();
    return time / (1000 * 3600 * 24);
  }

  getProfit(exit: any, entry: any) {
    return exit - entry;
  }

  editClick(i:any){
    this.formValue[i].isDisabled = !this.formValue[i].isDisabled
  }

  onSave(i:any) {
    localStorage.setItem("form-data",JSON.stringify(this.formValue));
    const updateTrades = JSON.parse(localStorage.getItem("form-data") || "")
    updateTrades[i].isDisabled = true
    this.formValue[i].isDisabled = !this.formValue[i].isDisabled

    localStorage.setItem("form-data",JSON.stringify(updateTrades));

  }

}
