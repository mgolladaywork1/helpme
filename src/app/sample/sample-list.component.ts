import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, DialogPosition} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { filter } from 'rxjs/operators';

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

    constructor(private dialog: MatDialog,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    goHelpMe() {
        console.log('Go Help ME!');
    }
    openHelpMeDialog(sample?) {
        this.helpMeDialogRef = this.dialog.open(HelpMeDialogComponent, { 
            hasBackdrop: false, 
            height: "350px", 
            width: "300px",
            data: {
                filename: sample ? sample.search : ''
              }            
        });
        this.helpMeDialogRef.updatePosition({ top: '50px', left: '50px'});

        this.helpMeDialogRef
            .afterClosed()
            .pipe(filter(name => name))
            .subscribe(name => {
                console.log(name);
                var choice1 = name + '';
                var res1="abc8";
                var comparison = (choice1==res1);
                console.log(comparison);
                if (choice1 == 'Parking near HOA') {
                    this.router.navigate(['/sample001'])    
                }
                else if (choice1 == 'Food Safety') {
                    this.router.navigate(['/sample002'])    
                }
                else if (choice1 == 'Property Tax') {
                    this.router.navigate(['/sample003'])    
                }
                else if (choice1 == 'Weapon Control') {
                    this.router.navigate(['/sample004'])    
                }
                else if (choice1 == 'Word Templates') {
                    this.router.navigate(['/sample005'])    
                }
                else if (choice1 == 'Road Closed') {
                    this.router.navigate(['/sample006'])    
                }
                else if (choice1 == 'Red Tape') {
                    this.router.navigate(['/sample007'])    
                }
                else if (choice1 == 'Homeless') {
                    this.router.navigate(['/sample008'])    
                }
                else {
                    this.router.navigate(['/samplelist'])    
                }                
            }
            );
    }

    changePosition() {
        this.helpMeDialogRef.updatePosition({ top: '50px', left: '50px' });
    }
}