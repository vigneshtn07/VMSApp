import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TextMaskModule } from 'angular2-text-mask';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';

import { VMSDialogModalComponent } from './components/vms-dialog-modal/vms-dialog-modal.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NumberDirective } from './directives/only-number.directive';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { VmsGridComponent } from './components/vms-grid/vms-grid.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { VmsGridCatergorySelectionComponent } from './components/vms-grid/vms-grid-catergory-selection/vms-grid-catergory-selection.component';
import { VmsGridFilterComponent } from './components/vms-grid/vms-grid-filter/vms-grid-filter.component';
import { VmsGridOptionsComponent } from './components/vms-grid/vms-grid-options/vms-grid-options.component';
import { VmsGridSearchComponent } from './components/vms-grid/vms-grid-search/vms-grid-search.component';
import { VmsGridTableComponent } from './components/vms-grid/vms-grid-table/vms-grid-table.component';
import { TypeofPipe } from './pipes/type-of.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { MenuBreadcrumbComponent } from './components/menu-breadcrumb/menu-breadcrumb.component';
import { RouterModule } from '@angular/router';
import { StackedProgressBarComponent } from './components/stacked-progress-bar/stacked-progress-bar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { VmsNotificationComponent } from './components/vms-notification/vms-notification.component';
import { VmsMenuComponent } from './components/side-navbar/vms-menu/vms-menu.component';
import { VmsMenuItemComponent } from './components/side-navbar/vms-menu-item/vms-menu-item.component';
import { darkTheme, lightTheme, ThemeModule } from 'src/theme';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';

export abstract class SharedModuleConstants {
  static readonly MODULE_IMPORTS = [
    CommonModule,
    ModalModule.forRoot(),
    TextMaskModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    SignaturePadModule,
    TableModule,
    DropdownModule,
    RouterModule,
    RadioButtonModule,
    ButtonModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 12,
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10,
        },
      },
    }),
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light',
    }),
    NgxSpinnerModule,
  ];
  static readonly MODULE_DECLARATIONS = [
    VMSDialogModalComponent,
    NumberDirective,
    ProgressBarComponent,
    VmsGridComponent,
    AppNavbarComponent,
    VmsGridSearchComponent,
    VmsGridFilterComponent,
    VmsGridOptionsComponent,
    VmsGridCatergorySelectionComponent,
    VmsGridTableComponent,
    MenuBreadcrumbComponent,
    StackedProgressBarComponent,
    SideNavbarComponent,
    TypeofPipe,
    SearchFilterPipe,
    VmsNotificationComponent,
    VmsMenuComponent,
    VmsMenuItemComponent,
    AppLoaderComponent,
  ];
  static readonly MODULE_EXPORTS = [
    CommonModule,
    ThemeModule,
    TextMaskModule,
    VMSDialogModalComponent,
    FormsModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule,
    NumberDirective,
    SignaturePadModule,
    ProgressBarComponent,
    NotifierModule,
    VmsGridComponent,
    AppNavbarComponent,
    VmsGridSearchComponent,
    VmsGridFilterComponent,
    VmsGridOptionsComponent,
    VmsGridCatergorySelectionComponent,
    StackedProgressBarComponent,
    VmsGridTableComponent,
    MenuBreadcrumbComponent,
    SideNavbarComponent,
    TypeofPipe,
    SearchFilterPipe,
    DropdownModule,
    RadioButtonModule,
    VmsNotificationComponent,
    VmsMenuComponent,
    VmsMenuItemComponent,
    AppLoaderComponent,
  ];
  static readonly MODULE_PROVIDERS = [];
}
