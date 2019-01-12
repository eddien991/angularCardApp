import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHistoryDialogComponent } from './employee-history-dialog.component';

describe('EmployeeHistoryDialogComponent', () => {
  let component: EmployeeHistoryDialogComponent;
  let fixture: ComponentFixture<EmployeeHistoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeHistoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
