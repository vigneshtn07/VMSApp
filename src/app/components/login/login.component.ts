import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthRequest } from 'src/app/services/interface';
import { UserAuthenticationService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  loginForm!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // display form values on success
    alert(JSON.stringify(this.loginForm.value, null, 4));
  }

  authenticateUser(): void {
    const userRequest: UserAuthRequest = {
      email: 'shelcia1999@gmail.com',
      password: 'shelcia',
    };
    this.userAuthService.authUser(userRequest).subscribe((response) => {
      console.log(response);
    });
  }
}
