import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'helpme-dialog',
    templateUrl: 'help-me-dialog.component.html',
    providers: [ FormBuilder ]
    
})
export class HelpMeDialogComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<HelpMeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
      this.form = this.formBuilder.group({
          filename: this.data? this.data.filename : ''
      })
      console.log(`data ${JSON.stringify(this.data)}`);
      console.log(`data search ${this.data.filename}`);
  }

  submit(form) {
      this.dialogRef.close(`${form.value.filename}`);
  }
}