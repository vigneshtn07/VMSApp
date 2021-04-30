import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  showPassword = {
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  };
  changepwdForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.changepwdForm = this.formBuilder.group({
      OldPassword: ['', [Validators.required]],
      EnterNewPassword: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('EnterNewPassword', 'ConfirmPassword')
    });
  }

  get f() {
    return this.changepwdForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.changepwdForm.invalid) {
      return;
    }
  }
}
