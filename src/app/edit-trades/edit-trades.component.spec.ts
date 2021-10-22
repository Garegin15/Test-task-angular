import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTradesComponent } from './edit-trades.component';

describe('EditTradesComponent', () => {
  let component: EditTradesComponent;
  let fixture: ComponentFixture<EditTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
