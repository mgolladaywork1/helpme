import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'helpme-chart',
  templateUrl: 'app-chart.component.html'
}) 
export class AppChartComponent{
   
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  gotoSampleList() {
    this.router.navigate(['/samplelist']);
  }

  gotoIntroduction() {
    this.router.navigate(['/intro']);
  }
  
}