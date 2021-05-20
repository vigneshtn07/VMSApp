import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BsDatepickerViewMode, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { SkillSourceRegistrationRequest } from 'src/app/interface/skill-source-registration.interface';
import { SignUpFormApiMapper } from '../signup-form.types';
import { StorageService } from 'src/app/core/storage/storage.service';
import { STORAGE_KEYS } from 'src/app/core/storage/storage.constants';
import { StorageType } from 'src/app/core/storage/storage.enum';
import * as SignUpFormHelper from '../sign-up.helper';

@Component({
    selector: 'app-signup-phase-two',
    templateUrl: './signup-phase-two.component.html',
    styleUrls: ['./signup-phase-two.component.scss'],
})
export class SignupPhaseTwoComponent implements OnInit {
    @Output() wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
    public submitted = false;
    public minMode: BsDatepickerViewMode = 'year';
    public bsConfig: Partial<BsDatepickerConfig>;
    public modelDate: any;
    public areaOfSpecialization: any;
    public industryDropDownList: any;
    public specializationDropDownList: any;
    public industrySelectedItems: any;
    public dropdownSettings = {};
    public skillPhaseTwoForm!: FormGroup;
    public maskTypes = {
        ZipCode: {
            guide: false,
            showMask: false,
            mask: MaskInputType.Zipcode,
        },
        Phone: {
            guide: false,
            showMask: false,
            mask: MaskInputType.PhoneFormat,
        },
    };
    inputReadonly = true;
    constructor(private formBuilder: FormBuilder, private storageService: StorageService) {
        this.bsConfig = Object.assign(
            {},
            {
                minMode: this.minMode,
                dateInputFormat: 'YYYY',
            }
        );
    }

    ngOnInit(): void {
        this.industryDropDownList = [
            { item_id: 1, item_text: 'IT' },
            { item_id: 2, item_text: 'Marketing' },
            { item_id: 3, item_text: 'Sales' },
            { item_id: 4, item_text: 'Designing' },
            { item_id: 5, item_text: 'Coaching' },
        ];
        this.specializationDropDownList = [
            { item_id: 1, item_text: 'IT' },
            { item_id: 2, item_text: 'Marketing' },
            { item_id: 3, item_text: 'Sales' },
            { item_id: 4, item_text: 'Designing' },
            { item_id: 5, item_text: 'Coaching' },
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 2,
            allowSearchFilter: true,
        };
        this.skillPhaseTwoForm = this.formBuilder.group({
            StateOfIncorporation: ['', Validators.required],
            EstablishedYear: ['', Validators.required],
            IndustrySelectedItems: ['', [Validators.required]],
            Division: ['', [Validators.required]],
            Payroll: [null, Validators.required],
            Specialization: ['', [Validators.required]],
            // AnnualRevenue: ['', Validators.required],
            TotalEmployees: ['', Validators.required],
            TotalFullTimeEmployees: ['', Validators.required],
            TotalSubContractors: ['', Validators.required],
            Worker: [null, Validators.required],
            TotalH1BVisa: ['', Validators.required],
            Website: ['', Validators.required],
            USHeadQuarters: ['', Validators.required],
            StreetAddress: ['', Validators.required],
            City: ['', Validators.required],
            State: ['', Validators.required],
            Country: [null, Validators.required],
            Zipcode: ['', Validators.required],
            AName: ['', Validators.required],
            Aemail: ['', [Validators.required, Validators.email]],
            APhone: ['', Validators.required],
            BName: ['', Validators.required],
            BEmail: ['', [Validators.required, Validators.email]],
            BPhone: ['', Validators.required],
        });
        const cachedValueFromSession = SignUpFormHelper.getStoredFormData(this.storageService);
        Object.keys(this.skillPhaseTwoForm.controls).forEach((formKey) => {
            if (cachedValueFromSession && Object.keys(cachedValueFromSession).length) {
                const value = (cachedValueFromSession as any)[SignUpFormApiMapper[formKey]];
                this.skillPhaseTwoForm.controls[formKey].patchValue(value);
            }
        });
    }

    get form() {
        return this.skillPhaseTwoForm.controls;
    }
    onContinue(): void {
        this.submitted = true;
        if (this.skillPhaseTwoForm.invalid) {
            return;
        }
        const requestObject = this.getUpdatedRequestObject();
        this.wizardStepEmitter.next({ step: 3, payLoad: requestObject });
    }

    getUpdatedRequestObject(): SkillSourceRegistrationRequest {
        const formData: any = SignUpFormHelper.getStoredFormData(this.storageService);
        Object.keys(this.skillPhaseTwoForm.controls).forEach((formControlKey: string) => {
            if (formControlKey === 'IndustrySelectedItems' || formControlKey === 'Specialization') {
                formData[SignUpFormApiMapper[formControlKey]] = this.skillPhaseTwoForm.controls[formControlKey].value
                    .map((value: any) => value.item_text)
                    .toString();
            } else {
                formData[SignUpFormApiMapper[formControlKey]] = this.skillPhaseTwoForm.controls[formControlKey].value;
            }
        });
        return formData;
    }

    navigateBack(): void {
        this.wizardStepEmitter.next({ step: 1, payLoad: SignUpFormHelper.getStoredFormData(this.storageService) });
    }

    onOpenCalendar(container: any) {
        container.monthSelectHandler = (event: any): void => {
            container._store.dispatch(container._actions.select(event.date));
        };
        container.setViewMode('year');
    }

    onValueChange(modelDate: Date): void {
        if (modelDate) {
            this.skillPhaseTwoForm.controls.EstablishedYear.patchValue(new Date(modelDate).getFullYear().toString());
        }
    }
}
