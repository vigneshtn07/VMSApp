export interface ProgressBreadCumb {
  title: string[];
  completedStep: number;
  totalStep: number;
  currentStep: number;
  isProcessFailed: boolean;
  progressMove: ProgressMove;
  breadCrumbConfig: ProgressBreadcrumConfig;
}

export interface ProgressBreadcrumConfig {
  canAnimate: boolean;
  reset: boolean;
}

export enum ProgressMove {
  FORWARD,
  REVERSE
}
