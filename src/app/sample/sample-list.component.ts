import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, DialogPosition} from '@angular/material';

import { SAMPLES } from './samples';
import { SampleResponse001Component } from './sample-response-001.component';
import { HelpMeDialogComponent } from './help-me-dialog.component';

@Component({
    selector: 'sample-list',
    templateUrl: 'sample-list.component.html'
})
export class SampleListComponent{
    demoSamples = SAMPLES;
    helpMeDialogRef: MatDialogRef<HelpMeDialogComponent>;

    constructor(private dialog: MatDialog) {}

    openHelpMeDialog() {
        this.helpMeDialogRef = this.dialog.open(HelpMeDialogComponent, { 
            hasBackdrop: false, height: "350px", width: "300px"
        });
        this.helpMeDialogRef.updatePosition({ top: '50px', left: '50px'});
    }

    changePosition() {
        this.helpMeDialogRef.updatePosition({ top: '50px', left: '50px' });
    }
}