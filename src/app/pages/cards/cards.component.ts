import { Component, OnInit } from '@angular/core';
import { CardsDataService } from '../../services/card-service/cards-data.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeHistoryDialogComponent } from '../../dialogs/employee-history-dialog/employee-history-dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  private cardsData: any;

  constructor(private cardsDataService: CardsDataService, private dialog: MatDialog) { }

  ngOnInit() {
    this.cardsDataService.getCardsData().subscribe((cardsData: any) => {
      this.cardsData = cardsData.body.data;
      console.log('this.cardsData ', this.cardsData);
    });
  }

  public openEmployeeHistory(employeeHistory: string): void {
    const dialogRef = this.dialog.open(EmployeeHistoryDialogComponent, {
      data: {
        employeeHistory: employeeHistory
      }
    });
    dialogRef.afterClosed().subscribe(result => {
     // console.log(`Dialog result: ${result}`);
    });
  }
}
