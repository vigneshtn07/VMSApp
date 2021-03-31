import { NgModule } from '@angular/core';
import { SharedModuleConstants } from './shared-module.constants';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  imports: [SharedModuleConstants.MODULE_IMPORTS],
  exports: [SharedModuleConstants.MODULE_EXPORTS],
  declarations: [SharedModuleConstants.MODULE_DECLARATIONS],
  providers: [],
})
export class SharedModule {}
