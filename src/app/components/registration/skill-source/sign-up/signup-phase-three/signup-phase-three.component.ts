import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillSourceRegistrationRequest } from 'src/app/interface/skill-source-registration.interface';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { SignUpFormApiMapper } from '../signup-form.types';
import * as SignUpFormHelper from '../sign-up.helper';
import { StorageService } from 'src/app/core/storage/storage.service';

@Component({
    selector: 'app-signup-phase-three',
    templateUrl: './signup-phase-three.component.html',
    styleUrls: ['./signup-phase-three.component.scss'],
})
export class SignupPhaseThreeComponent implements OnInit {
    @Output() wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
    public skillPhaseThreeForm!: FormGroup;
    public submitted = false;
    private benefitsOptions = [
        { isChecked: false, value: 'Medical' },
        { isChecked: false, value: 'Vision' },
        { isChecked: false, value: 'Life Insurance' },
        { isChecked: false, value: 'Disablity' },
        { isChecked: false, value: '401K' },
    ];

    constructor(private formBuilder: FormBuilder, private storageService: StorageService) { }
    ngOnInit(): void {
        this.skillPhaseThreeForm = this.formBuilder.group({
            TopTechSkills: ['', Validators.required],
            ServiceQualityPolicy: ['', Validators.required],
            OfferTraining: ['', Validators.required],
            BenefitsProvides: [false, Validators.requiredTrue],
        });
        const cachedValueFromSession = SignUpFormHelper.getStoredFormData(this.storageService);
    }
    get form() {
        return this.skillPhaseThreeForm.controls;
    }

    onContinue(): void {
        this.submitted = true;
        if (this.skillPhaseThreeForm.invalid) {
            return;
        }
        const requestObject = this.getUpdatedRequestObject();
        this.wizardStepEmitter.next({ step: 4, payLoad: requestObject });
    }

    getUpdatedRequestObject(): SkillSourceRegistrationRequest {
        const formData: any = SignUpFormHelper.getStoredFormData(this.storageService);
        Object.keys(this.skillPhaseThreeForm.controls).forEach((formControlKey: string) => {
            if (formControlKey === 'BenefitsProvides') {
                const benefitsCheckedValues = this.benefitsOptions.filter((x) => x.isChecked).map((y) => y.value);
                formData[SignUpFormApiMapper[formControlKey]] = benefitsCheckedValues.toString();
            } else {
                formData[SignUpFormApiMapper[formControlKey]] = this.skillPhaseThreeForm.controls[formControlKey].value;
            }
        });
        return formData;
    }

    navigateBack(): void {
        this.wizardStepEmitter.next({ step: 2, payLoad: SignUpFormHelper.getStoredFormData(this.storageService) });
    }

    onBenefitsCheckChange(target: any, index: number): void {
        this.benefitsOptions[index].isChecked = target.checked;
    }
}
