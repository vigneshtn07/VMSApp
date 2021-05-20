import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { SignaturePad } from 'angular2-signaturepad';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { SkillSourceRegistrationRequest } from 'src/app/interface/skill-source-registration.interface';
import { SignUpFormApiMapper } from '../signup-form.types';
import { AppLoadingService } from 'src/app/shared/service/app-loading.service';
import { CommonService } from 'src/app/services/common.service';
import { SkillSourceService } from 'src/app/services/skill-source.service';
import { additionalInfoRequest } from 'src/app/interface/index';
import { StorageService } from 'src/app/core/storage/storage.service';
import * as SignUpFormHelper from '../sign-up.helper';

@Component({
    selector: 'app-signup-phase-four',
    templateUrl: './signup-phase-four.component.html',
    styleUrls: ['./signup-phase-four.component.scss'],
})
export class SignupPhaseFourComponent implements OnInit {
    @Output() public wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
    @ViewChild(SignaturePad) public signaturePad!: SignaturePad;
    public signaturePadOptions: Object = { minWidth: 2 };
    public skillPhaseFourForm!: FormGroup;
    public submitted: boolean;
    public formFileNames: FormFiles;
    private readonly notifier!: NotifierService;

    constructor(
        private appLoadingService: AppLoadingService,
        notifierService: NotifierService,
        private storageService: StorageService,
        private formBuilder: FormBuilder,
        private skillSourceService: SkillSourceService,
        private commonService: CommonService
    ) {
        this.submitted = false;
        this.notifier = notifierService;
        this.formFileNames = {
            Articles: '',
            Certificate: '',
            Quaters: '',
            WForm: '',
        };
    }

    ngOnInit(): void {
        this.skillPhaseFourForm = this.formBuilder.group({
            NIACSCode: ['', Validators.required],
            DnbRating: ['', Validators.required],
            WForm: ['', Validators.required],
            Articles: ['', Validators.required],
            Certificate: ['', Validators.required],
            Quaters: ['', Validators.required],
            Reason: ['', Validators.required],
            Name: ['', Validators.required],
            Title: ['', Validators.required],
            Agree: [false, Validators.requiredTrue],
        });
    }
    get form() {
        return this.skillPhaseFourForm.controls;
    }

    ngAfterViewInit() {
        // this.signaturePad is now available
        this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    }

    drawComplete() {}

    navigateBack(): void {
        this.wizardStepEmitter.next({ step: 3, payLoad: SignUpFormHelper.getStoredFormData(this.storageService) });
    }

    onSubmit(): void {
        this.submitted = true;
        // if (this.skillphasefourForm.invalid) {
        //   return;
        // }
        const requestObject = this.getUpdatedRequestObject();
        const formDataRequestObject = this.convertJSONtoFormData(requestObject);
        console.log(formDataRequestObject);
        // this.wizardStepEmitter.next({ step: 5, payLoad: this.formData });
        // this.notifier.show({
        //   type: 'Signin successful',
        //   message: 'You will receive a confirmation email shortly!',
        // });

        this.skillSourceService.skillSourceUpdate(requestObject).subscribe(
            (response) => {
                const request: additionalInfoRequest = {
                    fname: requestObject['cname'].toString(),
                    email: requestObject['email'].toString(),
                    link: EmailRedirectUrl,
                };
                this.commonService.additionalInfoRequest(request).subscribe(
                    (response) => {
                        this.showSuccess('Additional Info Link Sent to email.kindly check...!');
                        this.wizardStepEmitter.next({ step: 5, payLoad: SignUpFormHelper.getStoredFormData(this.storageService) });
                        this.appLoadingService.setLoaderState(false);
                    },
                    (error) => {
                        this.showError(error.error);
                        this.appLoadingService.setLoaderState(false);
                    }
                );
            },
            (error) => {
                this.showError(error.error);
                this.appLoadingService.setLoaderState(false);
            }
        );
    }

    getUpdatedRequestObject(): SkillSourceRegistrationRequest {
        const formData = SignUpFormHelper.getStoredFormData(this.storageService);
        Object.keys(this.skillPhaseFourForm.controls).forEach((formControlKey: string) => {
            (formData as any)[SignUpFormApiMapper[formControlKey]] = this.skillPhaseFourForm.controls[formControlKey].value;
        });
        return formData;
    }

    handleFileInput(event: any, formkey: string): void {
        this.formFileNames[formkey] = event.target.files[0].name;
        this.skillPhaseFourForm.controls[formkey].patchValue(event.target.files[0]);
    }

    convertJSONtoFormData(requestObject: SkillSourceRegistrationRequest): FormData {
        let requestFormData = new FormData();
        for (let [key, value] of Object.entries(requestObject)) {
            requestFormData.append(key, value);
        }
        return requestFormData;
    }

    showError(error: any): void {
        this.notifier.show({
            type: 'info',
            message: error.error,
        });
    }

    showSuccess(msg: any): void {
        this.notifier.show({
            type: 'success',
            message: msg,
        });
    }
}

interface FormFiles {
    // WForm: any;
    // Articles: any;
    // Certificate: any;
    // Quaters: any;
    [key: string]: string;
}

const EmailRedirectUrl = 'http://localhost:4200/info-form';
