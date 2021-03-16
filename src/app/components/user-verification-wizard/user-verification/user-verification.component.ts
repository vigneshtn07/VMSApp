import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmationPromptComponent } from './confirmation-prompt/confirmation-prompt.component';



@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.scss']
})
export class UserVerificationComponent implements OnInit {
  bsModalRef: BsModalRef | undefined;
  emailId: string = '';
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }


  OpenModalPopUp(): void {
    const initialState: any = {
      emailId: this.emailId
    }
    this.bsModalRef = this.modalService.show(ConfirmationPromptComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
