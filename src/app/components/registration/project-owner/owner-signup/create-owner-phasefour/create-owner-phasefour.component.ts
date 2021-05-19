import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectOwnerRegisterRequest, ProjectOwnerStatement } from 'src/app/interface/index';
import { ProjectOwnerService } from 'src/app/services/project-owner.service';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { ProjectOwnerRegistrationRequest } from 'src/app/interface/project-owner-registration.interface';
import { SignUpFormApiMapper } from '../signup-form.types';
import { STORAGE_KEYS } from 'src/app/core/storage/storage.constants';
import { StorageType } from 'src/app/core/storage/storage.enum';
import { StorageService } from 'src/app/core/storage/storage.service';
import { CommonService } from 'src/app/services/common.service';
import { ProjectOwnerRegistration } from 'src/app/models';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NotifierService } from 'angular-notifier';
import { additionalInfoRequest } from 'src/app/interface/index';
import { Router } from '@angular/router';
import { AppLoadingService } from 'src/app/shared/service/app-loading.service';

@Component({
  selector: 'app-create-owner-phasefour',
  templateUrl: './create-owner-phasefour.component.html',
  styleUrls: ['./create-owner-phasefour.component.scss'],
})
export class CreateOwnerPhasefourComponent implements OnInit {
  @Output() public wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
  @Input() public formData!: ProjectOwnerRegistrationRequest;
  public list: ProjectOwnerStatement[] = [];
  openedModalIndex: number = 0;
  modalRef!: BsModalRef;
  statementHeader: string;
  statementContent: string;
  ownerPhaseFourForm!: FormGroup;
  submitted = false;
  industryDropDownList: any;
  private readonly notifier!: NotifierService;

  constructor(private appLoadingService: AppLoadingService, private router: Router, notifierService: NotifierService, private commonService: CommonService, private modalService: BsModalService, private formBuilder: FormBuilder, private projectOwnerService: ProjectOwnerService, private storageService: StorageService) {
    this.statementHeader = 'Statement 1';
    this.statementContent = `<p>Timely approval of Timecards and electronic payments</p><br>
    <p>I agree to providin fair payment terms. I Understand that any payment term over Net 45 will inccur a 0.5% fee for every 15 days. I also understand net terms start from the last day</p><br>
    <p>Provided minimum two week notice to Skill source to end an assigment</p><br>
    <p>Provided truthful reason if contract is ended short</p>`;
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.list = [
      {
        id: 1,
        title: 'Statement 1',
        checked: false,
        formkey: false,
      },
      {
        id: 2,
        title: 'Statement 2',
        checked: false,
        formkey: false,
      },
      {
        id: 3,
        title: 'Statement 3',
        checked: false,
        formkey: false,
      },
    ];
    this.ownerPhaseFourForm = this.formBuilder.group({
      certify: [false, Validators.requiredTrue]
    });
  }


  openModal(modalId: TemplateRef<any>, index: number) {
    this.openedModalIndex = index;
    this.modalRef = this.modalService.show(modalId);
  }

  acceptModal() {
    this.list[this.openedModalIndex].checked = true;
    this.modalRef.hide();
  }

  get form() { return this.ownerPhaseFourForm.controls; }

  navigateBack(): void {
    this.wizardStepEmitter.next({ step: 3, payLoad: this.formData });
  }

  onSubmit(): void {
    this.submitted = true;
    // if (this.ownerphasefourForm.invalid) {
    //   return;
    // }

    const id = JSON.parse(this.storageService.getValueFromStorage(StorageType.LocalStorage, STORAGE_KEYS.UserId));


    this.appLoadingService.setLoaderState(true);
    var requestObject = this.getUpdatedRequestObject();
    var obj: ProjectOwnerRegistrationRequest;
    obj = requestObject;
    obj.s1 = false;
    obj.s2 = false;
    obj.s3 = false;
    var date = (requestObject["year"].toString());
    this.industryDropDownList = (requestObject["industry"]);
    for (var i = 0; i < this.industryDropDownList.length; i++) {
      obj.industry = this.industryDropDownList[i].item_text;
    }
    obj.year = date.substr(11, 4);
    obj.fedTaxId = (requestObject["fedTaxId"].toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace('-', '').toString());
    obj.bphone = (requestObject["bphone"].toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace('-', '').toString().replace('-', '').toString());
    obj.phone = (requestObject["phone"].toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace('-', '').toString().replace('-', '').toString());
    obj.phoneno = (requestObject["phoneno"].toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace('-', '').toString().replace('-', '').toString());
    obj.pincode = (requestObject["pincode"].toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace('-', '').toString());
    obj.annualRevenue = (requestObject["annualRevenue"]);
    obj.noOfContractor = (requestObject["noOfContractor"]);

    debugger;
    this.projectOwnerService.editregister(obj, id).subscribe(
      (response) => {
        console.log(response);
        const request: additionalInfoRequest = {
          fname: (requestObject["cname"]).toString(),
          email: (requestObject["email"]).toString(),
          link: EmailRedirectUrl,
        };
        this.commonService.additionalInfoRequest(request).subscribe(
          (response) => {
            console.log(response);
            this.showSuccess("Additional Info Link Sent to email.kindly check...!");
            this.wizardStepEmitter.next({ step: 5, payLoad: this.formData });
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


  getUpdatedRequestObject(): ProjectOwnerRegistrationRequest {
    const formData: any = this.formData;
    Object.keys(this.ownerPhaseFourForm.controls).forEach((formControlKey: string) => {
      formData[SignUpFormApiMapper[formControlKey]] = this.ownerPhaseFourForm.controls[formControlKey].value;
    });
    return formData;
  }

  onReset() {
    this.submitted = false;
    this.ownerPhaseFourForm.reset();
    this.storageService.clear(StorageType.LocalStorage);
    this.router.navigate(['/login']);
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
const EmailRedirectUrl = 'http://localhost:4200/info-form';