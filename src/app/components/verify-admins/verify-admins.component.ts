import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-verify-admins',
  templateUrl: './verify-admins.component.html',
  styleUrls: ['./verify-admins.component.scss'],
})
export class VerifyAdminsComponent implements OnInit {
  modalRef!: BsModalRef;
  showPassword = {
    password: false,
    confirmPassword: false,
  };
  emailId!: string;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  onSubmit(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
