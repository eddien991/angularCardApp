import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './pages/cards/cards.component';
import { AppRoutingModule } from './app-routing.module';
import { CardsDataService } from './services/card-service/cards-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeeHistoryDialogComponent } from './dialogs/employee-history-dialog/employee-history-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    EmployeeHistoryDialogComponent,
],
declarations: [
  AppComponent,
  CardsComponent,
  EmployeeHistoryDialogComponent,
],
  providers: [CardsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
