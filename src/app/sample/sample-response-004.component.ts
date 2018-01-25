import {Component} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'sample-response-004',
  templateUrl: 'sample-response-004.component.html',
})
export class SampleResponse004Component {
  panelOpenState: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  goSamplelist() {
    this.router.navigate(['/samplelist']);
  } 

}
