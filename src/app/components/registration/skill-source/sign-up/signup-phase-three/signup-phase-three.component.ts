import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillSourceRegistrationRequest } from 'src/app/interface/skill-source-registration.interface';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { SignUpFormApiMapper } from '../signup-form.types';

@Component({
  selector: 'app-signup-phase-three',
  templateUrl: './signup-phase-three.component.html',
  styleUrls: ['./signup-phase-three.component.scss'],
})
export class SignupPhaseThreeComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
  @Input() public formData!: SkillSourceRegistrationRequest;
  public skillPhaseThreeForm!: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.skillPhaseThreeForm = this.formBuilder.group({
      TopTechSkills: ['', Validators.required],
      ServiceQualityPolicy: ['', Validators.required],
      OfferTraining: ['', Validators.required],
      BenefitsProvides: [false, Validators.requiredTrue],
    });
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
    this.wizardStepEmitter.next({ step: 4, payLoad: this.formData });
  }

  getUpdatedRequestObject(): SkillSourceRegistrationRequest {
    const formData: any = this.formData;
    Object.keys(this.skillPhaseThreeForm.controls).forEach((formControlKey: string) => {
      formData[SignUpFormApiMapper[formControlKey]] = this.skillPhaseThreeForm.controls[formControlKey].value;
    });
    return formData;
  }

  navigateBack(): void {
    this.wizardStepEmitter.next({ step: 2, payLoad: this.formData });
  }
}
