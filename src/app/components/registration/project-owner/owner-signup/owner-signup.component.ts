import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ProgressBreadCumb,
  ProgressMove,
} from 'src/app/shared/interface/progress-breadcrumb';
import { ProjectOwnerRegistrationRequest } from 'src/app/interface/project-owner-registration.interface';
import { WizardEventEmit } from 'src/app/interface/wizard.interface';
import { ProjectOwnerRegistration } from 'src/app/models/project-owner-registration.model';

export interface WizardEngine {
  onWizardStepEmitter(event: any): void;
}

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.scss'],
})
export class OwnerSignupComponent implements OnInit {
  public signUpWizardStep: number = 1;
  public showRegistraionResponse: boolean = false;
  stepProgressData!: ProgressBreadCumb;
  @ViewChild('progressBarEle')
  progressBarEle!: ElementRef;
  formValues: ProjectOwnerRegistrationRequest;
  constructor() {
    this.formValues = new ProjectOwnerRegistration();
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
    this.progressBarEle.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }



  incrementProgress(): void {
    if (this.stepProgressData) {
      if (
        this.stepProgressData.currentStep <= this.stepProgressData.totalStep
      ) {
        this.stepProgressData.currentStep = ++this.stepProgressData.currentStep;
        this.stepProgressData.completedStep =
          this.stepProgressData.currentStep > 0
            ? this.stepProgressData.currentStep - 1
            : 0;
        this.stepProgressData.progressMove = ProgressMove.FORWARD;
      }
    }
  }

  decrementProgress(): void {
    if (this.stepProgressData) {
      if (this.stepProgressData.currentStep > 0) {
        this.stepProgressData.currentStep = --this.stepProgressData.currentStep;
        this.stepProgressData.completedStep =
          this.stepProgressData.currentStep > 0
            ? this.stepProgressData.currentStep - 1
            : 0;
        this.stepProgressData.progressMove = ProgressMove.REVERSE;
      }
    }
  }
}
