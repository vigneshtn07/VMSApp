import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProgressBreadCumb, ProgressMove } from '../../interface/progress-breadcrumb';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit, AfterViewInit, OnChanges {
  breadCrumbtitles: string[] = [];
  @Input('inputConfig')
  breadCumb!: ProgressBreadCumb;
  currentStep: number = 0;
  completedStep: number = 0;
  progressBarDirection!: ProgressMove;
  @Input('stepValue')
  progressUpdateNotifierValue!: number;
  @Input()
  isProcessFailed!: boolean;
  @Input('progressMove') progressMove!: ProgressMove;
  @ViewChild('progressBreadCrumb', { static: false }) progressBreadCrumbEl: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbtitles = this.breadCumb.title;
  }

  ngAfterViewInit() {
    if (this.breadCumb.currentStep === 0) {
      this.increamentProgressBar();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.progressBarDirection = this.breadCumb.progressMove;
    if ((changes.progressUpdateNotifierValue &&
      changes.progressUpdateNotifierValue.currentValue !==
      changes.progressUpdateNotifierValue.previousValue) ||
      (changes.isProcessFailed &&
        changes.isProcessFailed.currentValue !==
        changes.isProcessFailed.previousValue)
    ) {
      if (changes.isProcessFailed && !changes.isProcessFailed.currentValue) {
        console.log('calling reinit loader');
        this.reInitializeLoader();
      }


      if (this.progressBarDirection === ProgressMove.FORWARD) {
        this.currentStep = this.breadCumb.currentStep;
        this.completedStep = this.breadCumb.completedStep;
        this.increamentProgressBar();
      } else {
        this.decrementProgressBar();
        this.currentStep = this.breadCumb.currentStep;
        this.completedStep = this.breadCumb.completedStep;
      }
    }
  }

  increamentProgressBar(): void {
    if (this.progressBreadCrumbEl) {
      const stepClasses = this.progressBreadCrumbEl.nativeElement.querySelectorAll(
        '.step'
      );
      if (stepClasses && this.currentStep <= this.breadCumb.totalStep) {
        if (this.currentStep !== 0) {
          if (this.breadCumb.isProcessFailed) {
            stepClasses[this.currentStep].classList.remove('inprogress');
            stepClasses[this.currentStep].classList.add('failed');
          } else {
            stepClasses[this.completedStep].classList.remove('inprogress');
            stepClasses[this.completedStep].classList.add('done');
            if (this.currentStep < this.breadCumb.totalStep) {
              setTimeout(() => {
                if (stepClasses[this.currentStep]) {
                  stepClasses[this.currentStep].classList.add('inprogress');
                }
              }, 1200);
            }
          }
        }
      }
    }
  }

  decrementProgressBar(): void {
    if (this.progressBreadCrumbEl) {
      const stepClasses = this.progressBreadCrumbEl.nativeElement.querySelectorAll(
        '.step'
      );
      stepClasses[this.currentStep].classList.remove('inprogress');
      stepClasses[this.completedStep].classList.remove('done');
      stepClasses[this.completedStep].classList.add('inprogress');
    }
  }

  reInitializeLoader(): void {
    if (this.progressBreadCrumbEl) {
      const stepClasses = this.progressBreadCrumbEl.nativeElement.querySelectorAll(
        '.step'
      );
      stepClasses.forEach((step: any) => {
        if (step.classList.contains('done')) {
          step.classList.remove('done');
        }
        if (step.classList.contains('inprogress')) {
          step.classList.remove('inprogress');
        }
        if (step.classList.contains('failed')) {
          step.classList.remove('failed');
        }
      });
      this.currentStep = 0;
      this.completedStep = 0;
    }
  }

  trackByFn(index: any): void {
    return index;
  }
}
