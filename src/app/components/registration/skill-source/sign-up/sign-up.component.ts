import { Component, OnInit } from '@angular/core';

export interface WizardEngine {
  onWizardStepEmitter(event: any): void;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, WizardEngine {
  public signUpWizardStep: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onWizardStepEmitter(event: any): void {
    if (event) {
      this.signUpWizardStep = event;
    }
  }

}
