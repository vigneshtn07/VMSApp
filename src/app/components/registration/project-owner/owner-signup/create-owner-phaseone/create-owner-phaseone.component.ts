import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-owner-phaseone',
  templateUrl: './create-owner-phaseone.component.html',
  styleUrls: ['./create-owner-phaseone.component.scss'],
})
export class CreateOwnerPhaseoneComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<number> = new EventEmitter();
  ownerphaseoneForm!: FormGroup;
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
    this.ownerphaseoneForm = this.formBuilder.group({
      CompanyName: ['', Validators.required],
      FedralTaxId: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    });
  }

  get f() { return this.ownerphaseoneForm.controls; }
  onContinue(): void {
    this.submitted = true;
    // if (this.ownerphaseoneForm.invalid) {
    //   return;
    // }
    this.wizardStepEmitter.next(2);
  }
}
