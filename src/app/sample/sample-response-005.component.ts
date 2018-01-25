import {Component} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'sample-response-005',
  templateUrl: 'sample-response-005.component.html',
})
export class SampleResponse005Component {
  panelOpenState: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  goSamplelist() {
    this.router.navigate(['/samplelist']);
  }
}
