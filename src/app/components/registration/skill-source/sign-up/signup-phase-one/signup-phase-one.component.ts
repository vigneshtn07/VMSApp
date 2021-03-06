import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaskInputType } from '../../../../../shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { SkillSourceRegistrationRequest } from 'src/app/interface/skill-source-registration.interface';
import { SkillSourceRegistration } from 'src/app/models/skill-source-registration.model';
import { SignUpFormApiMapper } from '../signup-form.types';
import { StorageService } from 'src/app/core/storage/storage.service';
import { StorageType } from 'src/app/core/storage/storage.enum';
import { STORAGE_KEYS } from 'src/app/core/storage/storage.constants';
import * as SignUpFormHelper from '../sign-up.helper';
@Component({
    selector: 'app-signup-phase-one',
    templateUrl: './signup-phase-one.component.html',
    styleUrls: ['./signup-phase-one.component.scss'],
})
export class SignupPhaseOneComponent implements OnInit {
    @Output() public wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
    public skillPhaseoneForm!: FormGroup;
    public submitted = false;
    public maskTypes = {
        Phone: {
            guide: false,
            showMask: false,
            mask: MaskInputType.PhoneFormat,
        },
        TaxId: {
            guide: false,
            showMask: false,
            mask: MaskInputType.TaxIdFormat,
        },
    };

    constructor(private formBuilder: FormBuilder, private storageService: StorageService) { }

    ngOnInit(): void {
        this.skillPhaseoneForm = this.formBuilder.group({
            CompanyName: ['', Validators.required],
            FedralTaxId: ['', Validators.required],
            PhoneNumber: ['', Validators.required],
        });
        const cachedValueFromSession = SignUpFormHelper.getStoredFormData(this.storageService);
        Object.keys(this.skillPhaseoneForm.controls).forEach((formKey) => {
            if (cachedValueFromSession && Object.keys(cachedValueFromSession).length) {
                const value = (cachedValueFromSession as any)[SignUpFormApiMapper[formKey]];
                this.skillPhaseoneForm.controls[formKey].patchValue(value);
            }
        });
        console.log((this.storageService.getValueFromStorage<string>(StorageType.LocalStorage, STORAGE_KEYS.UserId)));
    }
    get form() {
        return this.skillPhaseoneForm.controls;
    }

    onContinue(): void {
        this.submitted = true;
        if (this.skillPhaseoneForm.invalid) {
            return;
        }
        const requestObj = this.getRequestObject();
        this.wizardStepEmitter.next({ step: 2, payLoad: requestObj });
    }

    getRequestObject(): SkillSourceRegistrationRequest {
        const storedFormValue = SignUpFormHelper.getStoredFormData(this.storageService);
        const formData: any = storedFormValue && Object.keys(storedFormValue).length > 0 ? storedFormValue : new SkillSourceRegistration();
        Object.keys(this.skillPhaseoneForm.controls).forEach((formControlKey: string) => {
            formData[SignUpFormApiMapper[formControlKey]] = this.skillPhaseoneForm.controls[formControlKey].value;
        });
        return formData;
    }
}
