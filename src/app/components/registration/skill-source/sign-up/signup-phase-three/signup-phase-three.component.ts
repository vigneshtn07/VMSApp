import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup-phase-three',
  templateUrl: './signup-phase-three.component.html',
  styleUrls: ['./signup-phase-three.component.scss'],
})
export class SignupPhaseThreeComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onContinue(): void {
    this.wizardStepEmitter.next(4);
  }

  navigateBack(): void {
    this.wizardStepEmitter.next(2);
  }
}
