import {Component} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'sample-response-007',
  templateUrl: 'sample-response-007.component.html',
})
export class SampleResponse007Component {
  panelOpenState: boolean = false;

  constructor(
    private route : ActivatedRoute,
    private router: Router
  ){ }

  goSamplelist() {
    this.router.navigate(['/samplelist']);
  }
}
