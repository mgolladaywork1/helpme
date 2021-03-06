import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    template: `
    <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
    <img width="300" alt="HelpMe Logo" 
         src="assets/HelpMeIcon.gif"
         (click)="gotoIntroduction()" >
    </div>
    <h2 style="text-align: center;">Problem: Knowing who and how to get help for services throughtout the County (Interal Customers)</h2>
    <h2 style="text-align: center;">By</h2>
    <h2 style="text-align: center;">Miu Golladay</h2>
    <h2 style="text-align: center;">Quazi Hashmi</h2>
    <h2 style="text-align: center;">Selena Wang</h2>
    <h2 style="text-align: center;">Wilson Crider</h2>
  `
})
export class PageNotFoundComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
   ){}
  gotoIntroduction() {
    this.router.navigate(['/intro']);
  }

}