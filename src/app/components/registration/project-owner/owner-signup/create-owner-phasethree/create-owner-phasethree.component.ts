import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectOwnerRegistrationRequest } from 'src/app/interface/project-owner-registration.interface';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { ProjectOwnerRegisterRequest } from 'src/app/services/interface';
import { SignUpFormApiMapper } from '../signup-form.types';


@Component({
  selector: 'app-create-owner-phasethree',
  templateUrl: './create-owner-phasethree.component.html',
  styleUrls: ['./create-owner-phasethree.component.scss'],
})
export class CreateOwnerPhasethreeComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
  @Input() public formData!: ProjectOwnerRegistrationRequest;
  ownerPhaseThreeForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ownerPhaseThreeForm = this.formBuilder.group({
      projectname: ['', Validators.required],
      projectdesc: ['', Validators.required]
    });
  }

  get form() { return this.ownerPhaseThreeForm.controls; }

  onContinue(): void {
    this.submitted = true;
    // if (this.ownerphasethreeForm.invalid) {
    //   return;
    // }
    const requestObject = this.getUpdatedRequestObject();
    this.wizardStepEmitter.next({ step: 4, payLoad: this.formData });
  }

  getUpdatedRequestObject(): ProjectOwnerRegisterRequest {
    const formData: any = this.formData;
    Object.keys(this.ownerPhaseThreeForm.controls).forEach((formControlKey: string) => {
      formData[SignUpFormApiMapper[formControlKey]] = this.ownerPhaseThreeForm.controls[formControlKey].value;
    });
    return formData;
  }


  navigateBack(): void {
    this.wizardStepEmitter.next({ step: 2, payLoad: this.formData });
  }
}
