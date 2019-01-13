import { Component, OnInit } from '@angular/core';
import { CardsDataService } from '../../services/card-service/cards-data.service';
import { EmployeeHistoryDataService } from '../../services/employee-history-service/employee-history-data.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeHistoryDialogComponent } from '../../dialogs/employee-history-dialog/employee-history-dialog.component';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('slideInWithDelay', [
      state('init', style({ transform: 'translateX(300%)', opacity: 0 })),
      transition('void => start', [
        query('mat-card', style({ transform: 'translateX(300%)', opacity: 0 })),
        query('mat-card',
          stagger('100ms', [
            animate('{{time}} ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
          ]))
      ])
    ]),
  ]
})
export class CardsComponent implements OnInit {
  private cardsData: any;
  private employeeHistoryData: any;
  public animate: any = {
    value: 'init',
    params: {
      time: '750ms'
    }
  };

  constructor(
    private cardsDataService: CardsDataService,
    private employeeHistoryService: EmployeeHistoryDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cardsDataService.getCardsData().subscribe((cardsData: any) => {
      this.cardsData = cardsData.body.data;
    });
    this.animate.value = 'start';
  }

  public openEmployeeHistory(employeeHistory): void {
    this.employeeHistoryService.getEmployeeHistoryData(employeeHistory).subscribe((emoloyeeHistoryData: any) => {
      this.employeeHistoryData = emoloyeeHistoryData.body.data;
      this.dialog.open(EmployeeHistoryDialogComponent, {
        data: {
          employeeHistory: this.employeeHistoryData
        }
      });
    });
  }
}
