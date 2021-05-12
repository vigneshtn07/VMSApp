import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModuleConstants } from './shared-module.constants';

@NgModule({
  imports: [SharedModuleConstants.MODULE_IMPORTS],
  exports: [SharedModuleConstants.MODULE_EXPORTS],
  declarations: [SharedModuleConstants.MODULE_DECLARATIONS],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
