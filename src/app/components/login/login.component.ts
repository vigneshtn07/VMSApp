import { Component, OnInit } from '@angular/core';
import { UserAuthRequest } from 'src/app/services/interface';
import { UserAuthenticationService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  constructor(private userAuthService: UserAuthenticationService) {}

  ngOnInit(): void {}

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
