import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';

@Component({
  selector: 'app-create-owner-phaseone',
  templateUrl: './create-owner-phaseone.component.html',
  styleUrls: ['./create-owner-phaseone.component.scss'],
})
export class CreateOwnerPhaseoneComponent implements OnInit {
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
