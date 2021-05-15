import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Model from 'src/app/services/model/common'
import { ProjectOwnerEdit } from 'src/app/services/model/common'
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { ProjectOwnerRegistrationRequest } from 'src/app/interface/project-owner-registration.interface';
import { ProjectOwnerRegistration } from 'src/app/models/project-owner-registration.model';
import { SignUpFormApiMapper } from '../signup-form.types';


@Component({
  selector: 'app-create-owner-phaseone',
  templateUrl: './create-owner-phaseone.component.html',
  styleUrls: ['./create-owner-phaseone.component.scss'],
})
export class CreateOwnerPhaseoneComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
  @Input() public formData!: ProjectOwnerRegistrationRequest;
  ownerPhaseOneForm!: FormGroup;
  submitted = false;

  maskTypes = {
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ownerPhaseOneForm = this.formBuilder.group({
      CompanyName: ['', Validators.required],
      FedralTaxId: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    });
  }

  get form() { return this.ownerPhaseOneForm.controls; }
  onContinue(): void {
    this.submitted = true;
    // if (this.ownerphaseoneForm.invalid) {
    //   return;
    // }
    const requestObj = this.getRequestObject();
    this.wizardStepEmitter.next({ step: 2, payLoad: requestObj });
  }

  getRequestObject(): ProjectOwnerRegistrationRequest {
    const projectOwnerRequest: any = new ProjectOwnerRegistration();
    Object.keys(this.ownerPhaseOneForm.controls).forEach((formControlKey: string) => {
      projectOwnerRequest[SignUpFormApiMapper[formControlKey]] = this.ownerPhaseOneForm.controls[formControlKey].value;
    });
    return projectOwnerRequest;
  }
}
