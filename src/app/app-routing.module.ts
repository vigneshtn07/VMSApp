import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignUpComponent } from './components/registration/skill-source/sign-up/sign-up.component';
import { AuthSuccessComponent } from './components/user-verification-wizard/auth-success/auth-success.component';
import { UserVerificationComponent } from './components/user-verification-wizard/user-verification/user-verification.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'verify-user', component: UserVerificationComponent },
  { path: 'verify-user/AuthSucess/:id', component: AuthSuccessComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'registration', children: [
      {
        path: 'skill-source', component: RegistrationComponent, children: [
          { path: 'signUp', component: SignUpComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
