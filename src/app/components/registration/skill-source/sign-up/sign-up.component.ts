import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SkillSourceRegistrationRequest } from 'src/app/interface/skill-source-registration.interface';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { SkillSourceRegistration } from 'src/app/models/skill-source-registration.model';
import { ProgressBreadCumb, ProgressMove } from 'src/app/shared/interface/progress-breadcrumb';

export interface WizardEngine {
  onWizardStepEmitter(event: any): void;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, WizardEngine {
  public signUpWizardStep: number = 4;
  public showRegistraionResponse: boolean = false;
  stepProgressData!: ProgressBreadCumb;
  @ViewChild('progressBarEle') progressBarEle!: ElementRef;
  formValues: SkillSourceRegistrationRequest;

  constructor() {
    this.formValues = new SkillSourceRegistration();
  }

  ngOnInit(): void {
    this.initProgressBar();
  }

  initProgressBar(): void {
    this.stepProgressData = {
      breadCrumbConfig: {
        canAnimate: true,
        reset: false,
      },
      completedStep: 0,
      currentStep: 0,
      isProcessFailed: false,
      title: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
      totalStep: 4,
      progressMove: ProgressMove.FORWARD,
    };
  }

  onWizardStepEmitter(event: WizardEventEmit): void {
    if (event.step <= this.stepProgressData.totalStep) {
      if (event.step >= this.signUpWizardStep) {
        this.incrementProgress();
      } else {
        this.decrementProgress();
      }
    } else {
      this.incrementProgress();
      this.showRegistraionResponse = true;
    }
    this.signUpWizardStep = event.step;
    this.formValues = Object.assign({}, event.payLoad);
    this.progressBarEle.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  incrementProgress(): void {
    if (this.stepProgressData) {
      if (this.stepProgressData.currentStep <= this.stepProgressData.totalStep) {
        this.stepProgressData.currentStep = ++this.stepProgressData.currentStep;
        this.stepProgressData.completedStep =
          this.stepProgressData.currentStep > 0 ? this.stepProgressData.currentStep - 1 : 0;
        this.stepProgressData.progressMove = ProgressMove.FORWARD;
      }
    }
  }

  decrementProgress(): void {
    if (this.stepProgressData) {
      if (this.stepProgressData.currentStep > 0) {
        this.stepProgressData.currentStep = --this.stepProgressData.currentStep;
        this.stepProgressData.completedStep =
          this.stepProgressData.currentStep > 0 ? this.stepProgressData.currentStep - 1 : 0;
        this.stepProgressData.progressMove = ProgressMove.REVERSE;
      }
    }
  }
}
