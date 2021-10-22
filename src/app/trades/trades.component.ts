import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  public addForm: FormGroup;
  public formValue: any;

  constructor(
    public fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      entryDate: new FormControl(null, []),
      entryPrice: new FormControl(null, [Validators.min(5), Validators.max(10)]),
      exitDate: new FormControl(null, []),
      exitPrice: new FormControl(null, []),
      isDisabled: new FormControl(true, [])
    });
  }

  addButton() {
    this.formValue = JSON.parse(localStorage.getItem('form-data') || "[]");
    this.formValue.push(this.addForm.value)
    localStorage.setItem('form-data', JSON.stringify(this.formValue));
    if(this.formValue){
      this.router.navigateByUrl('/page/edit')
    }
  }

}
