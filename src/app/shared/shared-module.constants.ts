import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { IConfig, NgxMaskModule } from "ngx-mask";

import { VMSDialogModalComponent } from "./components/vms-dialog-modal/vms-dialog-modal.component";

const maskConfig: Partial<IConfig> = {
    validation: false,
};
export abstract class SharedModuleConstants {
    static readonly MODULE_IMPORTS = [
        CommonModule,
        ModalModule.forRoot(),
        NgxMaskModule.forRoot(maskConfig),
        FormsModule
    ];
    static readonly MODULE_EXPORTS = [
        CommonModule,
        NgxMaskModule,
        VMSDialogModalComponent,
        FormsModule
    ];
    static readonly MODULE_DECLARATIONS = [
        VMSDialogModalComponent
    ];
    static readonly MODULE_PROVIDERS = [];
}