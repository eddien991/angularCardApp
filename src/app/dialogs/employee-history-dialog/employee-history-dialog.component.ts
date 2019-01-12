import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-employee-history-dialog',
  templateUrl: './employee-history-dialog.component.html',
  styleUrls: ['./employee-history-dialog.component.css']
})
export class EmployeeHistoryDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EmployeeHistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

}
