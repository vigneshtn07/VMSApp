import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
})
export class CreatePasswordComponent implements OnInit {
  showPassword = {
    newPassword: false,
    confirmPassword: false,
  };
  private readonly notifier!: NotifierService;
  createpwdForm!: FormGroup;
  submitted = false;

  constructor(notifierService: NotifierService, private formBuilder: FormBuilder) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.createpwdForm = this.formBuilder.group({
      EnterNewPassword: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      ConfirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('EnterNewPassword', 'ConfirmPassword')
    });
  }


  get f() {
    return this.createpwdForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createpwdForm.invalid) {
      return;
    }
    this.notifier.show({
      type: 'success',
      message: 'Your password has been updated successfully',
    });
  }
}
