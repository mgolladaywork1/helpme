import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { MatCardModule, MatButtonModule, 
         MatIconModule, MatListDivider,
         MatExpansionModule, MatGridListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppIntroductionComponent } from './intro/app-introduction.component';
import { AppChartComponent } from './intro/app-chart.component';
import { SampleResponse001Component } from './sample/sample-response-001.component';
import { SampleResponse002Component } from './sample/sample-response-002.component';
import { SampleListComponent } from './sample/sample-list.component';

import { PageNotFoundComponent } from './not-found.component';
@NgModule({
  declarations: [
    AppComponent, AppIntroductionComponent, AppChartComponent, MatListDivider
          , SampleListComponent          
          , SampleResponse001Component
          , SampleResponse002Component
          , PageNotFoundComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatIconModule,  MatExpansionModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
