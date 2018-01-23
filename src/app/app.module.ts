import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { MatCardModule, MatButtonModule, 
         MatIconModule, MatListDivider, MatFormFieldModule, MatInputModule,
         MatExpansionModule, MatGridListModule, MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppIntroductionComponent } from './intro/app-introduction.component';
import { AppChartComponent } from './intro/app-chart.component';
import { SampleResponse001Component } from './sample/sample-response-001.component';
import { SampleResponse002Component } from './sample/sample-response-002.component';
import { SampleResponse003Component } from './sample/sample-response-003.component';
import { SampleResponse004Component } from './sample/sample-response-004.component';
import { SampleResponse005Component } from './sample/sample-response-005.component';
import { SampleResponse006Component } from './sample/sample-response-006.component';
import { SampleResponse007Component } from './sample/sample-response-007.component';
import { SampleResponse008Component } from './sample/sample-response-008.component';
import { SampleListComponent } from './sample/sample-list.component';
import { HelpMeDialogComponent } from './sample/help-me-dialog.component';

import { PageNotFoundComponent } from './not-found.component';
@NgModule({
  declarations: [
    AppComponent, AppIntroductionComponent, AppChartComponent, MatListDivider
          , SampleListComponent          
          , SampleResponse001Component
          , SampleResponse002Component
          , SampleResponse003Component
          , SampleResponse004Component
          , SampleResponse005Component
          , SampleResponse006Component
          , SampleResponse007Component
          , SampleResponse008Component
          , HelpMeDialogComponent
          , PageNotFoundComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MatCardModule, MatButtonModule, MatIconModule,  MatExpansionModule,
    MatGridListModule, MatDialogModule,
    AppRoutingModule, MatFormFieldModule, MatInputModule
  ],
  entryComponents: [ HelpMeDialogComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
