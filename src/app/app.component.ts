import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfigurationService } from './core/configuration/configuration.service';
import { AboutDialogComponent } from './core/help/about-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Title
   */
  title = 'Dancing Clover';

  /**
   * Flag if the descriptions should be shown.
   */
  showDescriptions: boolean;

  constructor(
    private titleService: Title,
    private configurationService: ConfigurationService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.configurationService.getDescriptionsDisplay()
      .subscribe(
        (show: boolean) => {
          this.showDescriptions = show;
        }
      );
  }

  /** Toggles the Descriptions Displays setting. */
  toggleDescriptionsDisplaySetting() {
    this.configurationService.toggleDescriptions();
  }

  /** Opens the 'About' dialog */
  openAboutDialog() {
    this.dialog.open(AboutDialogComponent);
  }
}
