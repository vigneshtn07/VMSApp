import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmationPromptComponent } from './confirmation-prompt/confirmation-prompt.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.scss']
})
export class UserVerificationComponent implements OnInit {
  bsModalRef: BsModalRef | undefined;
  emailId: string = '';
  userverifyForm!: FormGroup;
  submitted = false;
  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.userverifyForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.userverifyForm.controls;
  }

  OpenModalPopUp(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userverifyForm.invalid) {
      return;
    }
    const initialState: any = {
      emailId: this.emailId
    }
    this.bsModalRef = this.modalService.show(ConfirmationPromptComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
