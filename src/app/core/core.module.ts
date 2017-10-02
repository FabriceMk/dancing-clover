import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationService } from './configuration/configuration.service';

/**
 * Core Module hosts application wide singleton services,
 * and single components that only appear in AppComponent.
 * Should only be imported by the main AppModule.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: [ ConfigurationService ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
