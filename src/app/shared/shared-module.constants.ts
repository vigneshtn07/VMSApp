import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";

import { VMSDialogModalComponent } from "./components/vms-dialog-modal/vms-dialog-modal.component";



export abstract class SharedModuleConstants {
    static readonly MODULE_IMPORTS = [
        CommonModule,
        ModalModule.forRoot(),
        FormsModule
    ];
    static readonly MODULE_EXPORTS = [
        CommonModule,
        VMSDialogModalComponent,
        FormsModule
    ];
    static readonly MODULE_DECLARATIONS = [
        VMSDialogModalComponent
    ];
    static readonly MODULE_PROVIDERS = [];
}