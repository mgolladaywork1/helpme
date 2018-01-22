import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { MatCardModule, MatButtonModule, 
         MatIconModule, MatListDivider,
         MatExpansionModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppIntroductionComponent } from './intro/app-introduction.component';
import { AppChartComponent } from './intro/app-chart.component';
import { SampleResponse001Component } from './sample/sample-response-001.component';
import { PageNotFoundComponent } from './not-found.component';
@NgModule({
  declarations: [
    AppComponent, AppIntroductionComponent, AppChartComponent, MatListDivider
          , SampleResponse001Component
          , PageNotFoundComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatIconModule,  MatExpansionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
