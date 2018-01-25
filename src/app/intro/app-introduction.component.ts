import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
    selector: 'helpme-introduction',
    templateUrl: 'app-introduction.component.html',
    styleUrls: ['app-introduction.component.css']
})
export class AppIntroductionComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router
      ) {}
    
      gotoNext() {
        this.router.navigate(['/chart']);
      }
    
      gotoPrevious() {
        this.router.navigate(['/']);
      }
    
}