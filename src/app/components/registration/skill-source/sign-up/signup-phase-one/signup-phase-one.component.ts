import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaskInputType } from '../../../../../shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-phase-one',
  templateUrl: './signup-phase-one.component.html',
  styleUrls: ['./signup-phase-one.component.scss'],
})
export class SignupPhaseOneComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<number> = new EventEmitter();

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
  skillphaseoneForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.skillphaseoneForm = this.formBuilder.group({
      CompanyName: ['', Validators.required],
      FedralTaxId: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    });
  }
  get f() { return this.skillphaseoneForm.controls; }

  onContinue(): void {
    this.submitted = true;
    // if (this.skillphaseoneForm.invalid) {
    //   return;
    // }
    // alert('hi');
    this.wizardStepEmitter.next(2);
  }
}
