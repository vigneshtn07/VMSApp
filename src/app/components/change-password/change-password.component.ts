import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {}
}
