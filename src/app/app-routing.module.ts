import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';

import { AppChartComponent } from './intro/app-chart.component';
import { AppIntroductionComponent } from './intro/app-introduction.component';
import { SampleResponse001Component } from './sample/sample-response-001.component';
import { SampleResponse002Component } from './sample/sample-response-002.component';
import { SampleResponse003Component } from './sample/sample-response-003.component';
import { SampleResponse004Component } from './sample/sample-response-004.component';
import { SampleResponse005Component } from './sample/sample-response-005.component';
import { SampleResponse006Component } from './sample/sample-response-006.component';
import { SampleResponse007Component } from './sample/sample-response-007.component';
import { SampleResponse008Component } from './sample/sample-response-008.component';

import { SampleListComponent } from './sample/sample-list.component';


import { PageNotFoundComponent } from './not-found.component';

const appRoute: Routes = [
    { path: 'chart',  component: AppChartComponent },
    { path: 'intro',  component: AppIntroductionComponent },
    { path: 'samplelist',  component: SampleListComponent },
    { path: 'sample001',  component: SampleResponse001Component },
    { path: 'sample002',  component: SampleResponse002Component },
    { path: 'sample003',  component: SampleResponse003Component },
    { path: 'sample004',  component: SampleResponse004Component },
    { path: 'sample005',  component: SampleResponse005Component },
    { path: 'sample006',  component: SampleResponse006Component },
    { path: 'sample007',  component: SampleResponse007Component },
    { path: 'sample008',  component: SampleResponse008Component },


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