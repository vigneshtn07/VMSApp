import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

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

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.notifier.show({
      type: 'success',
      message: 'Your password has been updated successfully',
    });
  }
}
