import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ProgressBreadCumb,
  ProgressMove,
} from 'src/app/shared/interface/progress-breadcrumb';

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
  constructor() {}

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

  onWizardStepEmitter(step: number): void {
    if (step <= this.stepProgressData.totalStep) {
      if (step >= this.signUpWizardStep) {
        this.incrementProgress();
      } else {
        this.decrementProgress();
      }
    } else {
      this.incrementProgress();
      this.showRegistraionResponse = true;
    }
    this.signUpWizardStep = step;
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
