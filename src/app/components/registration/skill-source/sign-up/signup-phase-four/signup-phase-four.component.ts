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
import { STORAGE_KEYS } from 'src/app/core/storage/storage.constants';
import { StorageType } from 'src/app/core/storage/storage.enum';

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
    blob: any;
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

    drawComplete() {
        console.log(this.signaturePad.toDataURL());
        const dataURL = this.signaturePad.toDataURL('image/jpg');
        const data = atob(dataURL.substring('data:image/jpg;base64,'.length)),
            asArray = new Uint8Array(data.length);

        for (var i = 0, len = data.length; i < len; ++i) {
            asArray[i] = data.charCodeAt(i);
        }
        this.blob = new Blob([asArray], { type: 'image/jpg' });

        //console.log(blob);
    }

    navigateBack(): void {
        this.wizardStepEmitter.next({ step: 3, payLoad: SignUpFormHelper.getStoredFormData(this.storageService) });
    }

    onSubmit(): void {
        this.submitted = true;
        // if (this.skillphasefourForm.invalid) {
        //   return;
        // }
        const id = (this.storageService.getValueFromStorage<string>(StorageType.LocalStorage, STORAGE_KEYS.UserId));
        this.appLoadingService.setLoaderState(true);
        const requestObject = this.getUpdatedRequestObject();
        var obj: SkillSourceRegistrationRequest;
        obj = requestObject;
        // const formDataRequestObject = this.convertJSONtoFormData(requestObject);
        // console.log(id);serve
        obj.fedTaxId = requestObject['fedTaxId']
            .toString()
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
            .replace('-', '')
            .toString();
        obj.phoneno = requestObject['phoneno']
            .toString()
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
            .replace('-', '')
            .toString()
            .replace('-', '')
            .toString();
        obj.phone = requestObject['phone']
            .toString()
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
            .replace('-', '')
            .toString()
            .replace('-', '')
            .toString();
        obj.bphone = requestObject['bphone']
            .toString()
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
            .replace('-', '')
            .toString()
            .replace('-', '')
            .toString();
        obj.pincode = requestObject['pincode']
            .toString()
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
            .replace('-', '')
            .toString();
        obj.id = id;
        obj.password = "password";
        obj.signature = this.blob;

        var data = new FormData();
        data.append('cname', JSON.stringify(obj.cname));
        data.append('fedTaxId', JSON.stringify(obj.fedTaxId));
        data.append('phoneno', JSON.stringify(obj.phoneno));
        data.append('cstate', JSON.stringify(obj.cstate));
        data.append('year', JSON.stringify(obj.year));
        data.append('industry', JSON.stringify(obj.industry));
        data.append('division', JSON.stringify(obj.division));
        data.append('payroll', JSON.stringify(obj.payroll));
        data.append('address', JSON.stringify(obj.address));
        data.append('noOfEmployees', JSON.stringify(obj.noOfEmployees));
        data.append('noOfFulltime', JSON.stringify(obj.noOfFulltime));
        data.append('noOfSubContractors', JSON.stringify(obj.noOfSubContractors));
        data.append('HWorkers', JSON.stringify(obj.HWorkers));
        data.append('noOfVisa', JSON.stringify(obj.noOfVisa));
        data.append('website', JSON.stringify(obj.website));
        data.append('city', JSON.stringify(obj.city));
        data.append('state', JSON.stringify(obj.state));
        data.append('country', JSON.stringify(obj.country));
        data.append('pincode', JSON.stringify(obj.pincode));
        data.append('fullname', JSON.stringify(obj.fullname));
        data.append('email', JSON.stringify(obj.email));
        data.append('area', JSON.stringify(obj.area));
        data.append('phone', JSON.stringify(obj.phone));
        data.append('bname', JSON.stringify(obj.bname));
        data.append('bemail', JSON.stringify(obj.bemail));
        data.append('bphone', JSON.stringify(obj.bphone));
        data.append('topSkills', JSON.stringify(obj.topSkills));
        data.append('benefits', JSON.stringify(obj.benefits));
        data.append('service', JSON.stringify(obj.service));
        data.append('training', JSON.stringify(obj.training));
        data.append('naics', JSON.stringify(obj.naics));
        data.append('dnb', JSON.stringify(obj.dnb));
        data.append('wForm', obj.wForm);
        data.append('article', obj.article);
        data.append('goodStanding', obj.goodStanding);
        data.append('lastQuaters', obj.lastQuaters);
        data.append('reason', JSON.stringify(obj.reason));
        data.append('repName', JSON.stringify(obj.repName));
        data.append('repTitle', JSON.stringify(obj.repTitle));
        // data.append('signature', obj.signature);
        console.log(data);


        this.skillSourceService.uploadskillsource(data, id).subscribe(
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
