import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  dataNofitier = new Subject<string>();
  constructor() {}

  public setDataNotifier(value: string) {
    this.dataNofitier.next(value);
  }

  public getDataNotifier() {
    return this.dataNofitier.asObservable();
  }
}
