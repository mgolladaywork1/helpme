import { Component } from '@angular/core';
import { SAMPLES } from './samples';
import { SampleResponse001Component } from './sample-response-001.component';


@Component({
    selector: 'sample-list',
    templateUrl: 'sample-list.component.html'
})
export class SampleListComponent{
    demoSamples = SAMPLES;
}