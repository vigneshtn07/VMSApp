import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsDatepickerViewMode, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { ProjectOwnerRegistrationRequest } from 'src/app/interface/project-owner-registration.interface';
import { SignUpFormApiMapper } from '../signup-form.types';

@Component({
    selector: 'app-create-owner-phasetwo',
    templateUrl: './create-owner-phasetwo.component.html',
    styleUrls: ['./create-owner-phasetwo.component.scss'],
})
export class CreateOwnerPhasetwoComponent implements OnInit {
    @Output() wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
    @Input() public formData!: ProjectOwnerRegistrationRequest;
    ownerPhaseTwoForm!: FormGroup;
    submitted = false;

    minMode: BsDatepickerViewMode = 'year';
    bsConfig: Partial<BsDatepickerConfig>;
    modelDate: any;
    areaOfSpecialization: any;

    industryDropDownList: any;
    specializationDropDownList: any;
    industrySelectedItems: any;
    dropdownSettings = {};

    maskTypes = {
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
    constructor(private formBuilder: FormBuilder) {
        this.bsConfig = Object.assign(
            {},
            {
                minMode: this.minMode,
                dateInputFormat: 'YYYY',
            }
        );

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
    }

    onContinue(): void {
        this.submitted = true;
        // if (this.ownerphasetwoForm.invalid) {
        //   return;
        // }
        const requestObject = this.getUpdatedRequestObject();
        this.wizardStepEmitter.next({ step: 3, payLoad: requestObject });
    }

    getUpdatedRequestObject(): ProjectOwnerRegistrationRequest {
        const formData: any = this.formData;
        Object.keys(this.ownerPhaseTwoForm.controls).forEach((formControlKey: string) => {
            formData[SignUpFormApiMapper[formControlKey]] = this.ownerPhaseTwoForm.controls[formControlKey].value;
        });
        return formData;
    }

    navigateBack(): void {
        this.wizardStepEmitter.next({ step: 1, payLoad: this.formData });
    }

    onOpenCalendar(container: any) {
        container.monthSelectHandler = (event: any): void => {
            container._store.dispatch(container._actions.select(event.date));
        };
        container.setViewMode('year');
    }

    onItemSelect(item: any) {}
    onSelectAll(items: any) {}

    get form() {
        return this.ownerPhaseTwoForm.controls;
    }

    ngOnInit(): void {
        this.ownerPhaseTwoForm = this.formBuilder.group({
            stateOfIncorporation: ['', Validators.required],
            establishedYear: ['', Validators.required],
            industrySelectedItems: ['', [Validators.required]],
            Division: ['', [Validators.required]],
            AnnualRevenue: ['', Validators.required],
            TotalContractors: ['', Validators.required],
            Website: ['', Validators.required],
            StreetAddress: ['', Validators.required],
            City: ['', Validators.required],
            State: ['', Validators.required],
            Country: [null, Validators.required],
            Zipcode: ['', Validators.required],
            AName: ['', Validators.required],
            Aemail: ['', [Validators.required, Validators.email]],
            APhone: ['', Validators.required],
            Name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            Phone: ['', Validators.required],
            BusinessDescription: ['', Validators.required],
            Paymentterms: ['', Validators.required],
            // certify: [false, Validators.requiredTrue]
        });
    }
}
