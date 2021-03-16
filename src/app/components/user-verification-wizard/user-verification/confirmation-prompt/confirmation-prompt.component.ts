import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-prompt',
  templateUrl: './confirmation-prompt.component.html',
  styleUrls: ['./confirmation-prompt.component.scss']
})
export class ConfirmationPromptComponent implements OnInit {
  emailId: string = '';
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  hideModal(): void {
    this.bsModalRef?.hide();
  }
}
