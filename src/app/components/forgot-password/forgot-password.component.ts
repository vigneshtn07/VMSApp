import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailId: string = '';
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService
    , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'wizard-prompt' }));
  }

  redirectToLogin(): void {
    this.modalRef.hide();
    this.router.navigate(['/login']);
  }

}
