import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaskInputType } from '../../../../../shared/constants/masking.constant';

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
  constructor() {}

  ngOnInit(): void {}

  onContinue(): void {
    this.wizardStepEmitter.next(2);
  }
}
