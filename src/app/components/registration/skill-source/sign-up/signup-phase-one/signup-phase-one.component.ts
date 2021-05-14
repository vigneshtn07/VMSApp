import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaskInputType } from '../../../../../shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { SkillSourceRegistrationRequest } from 'src/app/interface/skill-source-registration.interface';
import { SkillSourceRegistration } from 'src/app/models/skill-source-registration.model';
import { SignUpFormApiMapper } from '../signup-form.types';

@Component({
  selector: 'app-signup-phase-one',
  templateUrl: './signup-phase-one.component.html',
  styleUrls: ['./signup-phase-one.component.scss'],
})
export class SignupPhaseOneComponent implements OnInit {
  @Output() public wizardStepEmitter: EventEmitter<WizardEventEmit> = new EventEmitter();
  @Input() public formData!: SkillSourceRegistrationRequest;
  public skillPhaseoneForm!: FormGroup;
  public submitted = false;
  public maskTypes = {
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.skillPhaseoneForm = this.formBuilder.group({
      CompanyName: ['', Validators.required],
      FedralTaxId: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
    });
  }
  get form() {
    return this.skillPhaseoneForm.controls;
  }

  onContinue(): void {
    this.submitted = true;
    if (this.skillPhaseoneForm.invalid) {
      return;
    }
    const requestObj = this.getRequestObject();
    this.wizardStepEmitter.next({ step: 2, payLoad: requestObj });
  }

  getRequestObject(): SkillSourceRegistrationRequest {
    const skillSourceRequest: any = new SkillSourceRegistration();
    Object.keys(this.skillPhaseoneForm.controls).forEach((formControlKey: string) => {
      skillSourceRequest[SignUpFormApiMapper[formControlKey]] = this.skillPhaseoneForm.controls[formControlKey].value;
    });
    return skillSourceRequest;
  }
}
