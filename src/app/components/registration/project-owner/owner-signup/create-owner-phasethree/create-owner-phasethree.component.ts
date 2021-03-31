import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-owner-phasethree',
  templateUrl: './create-owner-phasethree.component.html',
  styleUrls: ['./create-owner-phasethree.component.scss'],
})
export class CreateOwnerPhasethreeComponent implements OnInit {
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
