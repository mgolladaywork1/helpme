import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';

import { AppChartComponent } from './intro/app-chart.component';
import { AppIntroductionComponent } from './intro/app-introduction.component';
import { SampleResponse001Component } from './sample/sample-response-001.component';
import { SampleResponse002Component } from './sample/sample-response-002.component';
import { SampleListComponent } from './sample/sample-list.component';


import { PageNotFoundComponent } from './not-found.component';

const appRoute: Routes = [
    { path: 'chart',  component: AppChartComponent },
    { path: 'intro',  component: AppIntroductionComponent },
    { path: 'samplelist',  component: SampleListComponent },
    { path: 'sample001',  component: SampleResponse001Component },
    { path: 'sample002',  component: SampleResponse002Component },


    { path: '**',component: PageNotFoundComponent }

];

@NgModule({
  imports: [
      RouterModule.forRoot(
        appRoute, {
            enableTracing: true
        }
      )
  ], 
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {
    
} 