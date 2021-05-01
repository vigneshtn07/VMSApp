import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';

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
  verifyadminForm!: FormGroup;
  submitted = false;
  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.verifyadminForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      NewPassword: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      ConfirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('NewPassword', 'ConfirmPassword')
    });
  }

  get f() {
    return this.verifyadminForm.controls;
  }


  onSubmit(template: TemplateRef<any>): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.verifyadminForm.invalid) {
      return;
    }
    this.modalRef = this.modalService.show(template);
  }
}
