import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordRequest } from 'src/app/services/interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailId: string = '';
  modalRef!: BsModalRef;
  forgotpwdForm!: FormGroup;
  submitted = false;
  constructor(private modalService: BsModalService
    , private router: Router, private formBuilder: FormBuilder, private commonService: CommonService) { }

  ngOnInit(): void {
    this.forgotpwdForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.forgotpwdForm.controls;
  }

  onSubmit(template: TemplateRef<any>): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotpwdForm.invalid) {
      return;
    }

    const request: ForgotPasswordRequest = {
      email: this.emailId
    };

    this.commonService.forgotPassword(request).subscribe(
      (response) => {
        console.log(response);
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'wizard-prompt' }));
      },
      (error) => {
        console.error(error.error);
      }
    );
  }

  redirectToLogin(): void {
    this.modalRef.hide();
    this.router.navigate(['/login']);
  }

}
