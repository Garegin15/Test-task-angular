import { ChangeDetectionStrategy, Component, ViewChild, OnInit } from '@angular/core';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  public transitionInMode: string = "Auto";
  public transitionInInterval: string = "1000";
  public data: any[];
  public formValue: any;
  public results: any

  ngOnInit(): void {
  }

  @ViewChild("chart", { static: true })
  public chart: IgxCategoryChartComponent;

  constructor() {
    this.data = this.generateData();
  }

  public onChangeAmountClicked() {
    this.data = this.generateData();
  }

  public OnTransitionIntervalChange(e: any) {
    this.transitionInInterval = e.target.value;
  }

  private generateData(): any[] {
    this.formValue = JSON.parse(localStorage.getItem('form-data') || "")
    this.results = this.formValue.map((element: any) => {
      return {
        Entry_Date: element.entryDate,
        Entry_Price: element.entryPrice,
        Exit_Date: element.exitDate,
        Exit_Price: element.exitPrice
      }
    });

    const data: any[] = this.results;

    return data;
  }

}
