import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
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
    private dialogRef: MatDialogRef<HelpMeDialogComponent>
  ) {}

  ngOnInit() {
      this.form = this.formBuilder.group({
          filename: ''
      })
  }

  submit(form) {
      this.dialogRef.close(`${form.value.filename}`);
  }
}