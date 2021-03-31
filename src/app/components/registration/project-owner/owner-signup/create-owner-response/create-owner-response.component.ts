import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-owner-response',
  templateUrl: './create-owner-response.component.html',
  styleUrls: ['./create-owner-response.component.scss'],
})
export class CreateOwnerResponseComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
