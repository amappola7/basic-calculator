import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalculatorComponent } from './ui/pages/calculator/calculator.component';
import { NumericButtonComponent } from './ui/shared/numeric-button/numeric-button.component';
import { OperationButtonComponent } from './ui/shared/operation-button/operation-button.component';
import { ResultScreenComponent } from './ui/shared/result-screen/result-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NumericButtonComponent,
    OperationButtonComponent,
    ResultScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
