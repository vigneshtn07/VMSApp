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
import { ProjectOwnerRegisterRequest, ProjectOwnerStatement } from 'src/app/services/interface';
import { ProjectOwnerService } from 'src/app/services/project-owner.service';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { ProjectOwnerRegistrationRequest } from 'src/app/interface/project-owner-registration.interface';
import { SignUpFormApiMapper } from '../signup-form.types';

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

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder, private projectOwnerService: ProjectOwnerService) {
    this.statementHeader = 'Statement 1';
    this.statementContent = `<p>Timely approval of Timecards and electronic payments</p><br>
    <p>I agree to providin fair payment terms. I Understand that any payment term over Net 45 will inccur a 0.5% fee for every 15 days. I also understand net terms start from the last day</p><br>
    <p>Provided minimum two week notice to Skill source to end an assigment</p><br>
    <p>Provided truthful reason if contract is ended short</p>`;
  }

  ngOnInit(): void {
    this.list = [
      {
        id: 1,
        title: 'Statement 1',
        checked: false,
      },
      {
        id: 2,
        title: 'Statement 2',
        checked: false,
      },
      {
        id: 3,
        title: 'Statement 3',
        checked: false,
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
    // const request: ProjectOwnerRegisterRequest = {
    //   "cname": "Romeo",
    //   "email": "msm17b003@iiitdmmm.ac.in",
    //   "password": "password"
    // };

    // this.projectOwnerService.register(request).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.error(error.error);
    //   }
    // );
    const requestObject = this.getUpdatedRequestObject();
    this.wizardStepEmitter.next({ step: 5, payLoad: this.formData });
  }


  getUpdatedRequestObject(): ProjectOwnerRegistrationRequest {
    const formData: any = this.formData;
    Object.keys(this.ownerPhaseFourForm.controls).forEach((formControlKey: string) => {
      formData[SignUpFormApiMapper[formControlKey]] = this.ownerPhaseFourForm.controls[formControlKey].value;
    });
    return formData;
  }
}
