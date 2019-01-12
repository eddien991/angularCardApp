import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './pages/cards/cards.component';
import { AppRoutingModule } from './app-touting.module';
import { CardsDataService } from './services/card-service/cards-data.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CardsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
