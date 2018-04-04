import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { environment } from './../../../environments/environment';

/**
 * Dialog for 'About' information
 */
@Component({
  selector: 'app-about-dialog',
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.scss']
})
export class AboutDialogComponent {
  /** Version of the application */
  version = environment.version;

  constructor(
    public dialogRef: MatDialogRef<AboutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  /** Event handler for click on Close button */
  onCloseClick() {
    this.dialogRef.close();
  }
}
