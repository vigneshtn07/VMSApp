import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppLoadingService {
  loaderState = new Subject<boolean>();
  constructor() {}

  setLoaderState(loadingState: boolean): void {
    this.loaderState.next(loadingState);
  }

  getLoaderState(): Observable<boolean> {
    return this.loaderState.asObservable();
  }
}
