import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TextMaskModule } from 'angular2-text-mask';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';

import { VMSDialogModalComponent } from './components/vms-dialog-modal/vms-dialog-modal.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NumberDirective } from './directives/only-number.directive';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

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
      }
    }),
  ];
  static readonly MODULE_DECLARATIONS = [
    VMSDialogModalComponent,
    NumberDirective,
    ProgressBarComponent,
  ];
  static readonly MODULE_EXPORTS = [
    CommonModule,
    TextMaskModule,
    VMSDialogModalComponent,
    FormsModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule,
    NumberDirective,
    SignaturePadModule,
    ProgressBarComponent,
    NotifierModule
  ];
  static readonly MODULE_PROVIDERS = [];
}
