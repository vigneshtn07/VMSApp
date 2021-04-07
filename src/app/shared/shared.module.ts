import { NgModule } from '@angular/core';
import { SharedModuleConstants } from './shared-module.constants';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { VmsGridComponent } from './components/vms-grid/vms-grid.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';

@NgModule({
  imports: [SharedModuleConstants.MODULE_IMPORTS],
  exports: [SharedModuleConstants.MODULE_EXPORTS],
  declarations: [SharedModuleConstants.MODULE_DECLARATIONS, VmsGridComponent, AppNavbarComponent],
  providers: [],
})
export class SharedModule {}
