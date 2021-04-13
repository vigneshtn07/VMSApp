import { NgModule } from '@angular/core';
import { SharedModuleConstants } from './shared-module.constants';
import { MenuBreadcrumbComponent } from './components/menu-breadcrumb/menu-breadcrumb.component';
import { StackedProgressBarComponent } from './components/stacked-progress-bar/stacked-progress-bar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';

@NgModule({
  imports: [SharedModuleConstants.MODULE_IMPORTS],
  exports: [SharedModuleConstants.MODULE_EXPORTS],
  declarations: [SharedModuleConstants.MODULE_DECLARATIONS],
  providers: [],
})
export class SharedModule {}
