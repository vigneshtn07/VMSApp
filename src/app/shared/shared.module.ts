import { NgModule } from '@angular/core';
import { SharedModuleConstants } from './shared-module.constants';
import { MenuBreadcrumbComponent } from './components/menu-breadcrumb/menu-breadcrumb.component';
import { StackedProgressBarComponent } from './components/stacked-progress-bar/stacked-progress-bar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { VmsMenuComponent } from './components/side-navbar/vms-menu/vms-menu.component';
import { VmsMenuItemComponent } from './components/side-navbar/vms-menu-item/vms-menu-item.component';

@NgModule({
  imports: [SharedModuleConstants.MODULE_IMPORTS],
  exports: [SharedModuleConstants.MODULE_EXPORTS],
  declarations: [SharedModuleConstants.MODULE_DECLARATIONS, VmsMenuComponent, VmsMenuItemComponent],
  providers: [],
})
export class SharedModule {}
