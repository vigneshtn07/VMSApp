import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup-phase-one',
  templateUrl: './signup-phase-one.component.html',
  styleUrls: ['./signup-phase-one.component.scss']
})
export class SignupPhaseOneComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onContinue(): void {
    this.wizardStepEmitter.next(1);
  }

}
