import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationAddtionalInfoComponent } from './components/registration-addtional-info/registration-addtional-info.component';
import { RegistrationStatusComponent } from './components/registration-status/registration-status.component';
import { OwnerSignupComponent } from './components/registration/project-owner/owner-signup/owner-signup.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignUpComponent } from './components/registration/skill-source/sign-up/sign-up.component';
import { RegistrationSpecialistFormComponent } from './components/registration/specialist/registration-form/registration-form.component';
import { AuthSuccessComponent } from './components/user-verification-wizard/auth-success/auth-success.component';
import { UserVerificationComponent } from './components/user-verification-wizard/user-verification/user-verification.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'verify-user', component: UserVerificationComponent },
  { path: 'verify-user/AuthSucess/:id', component: AuthSuccessComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'create-password', component: CreatePasswordComponent },
  { path: 'registration-status', component: RegistrationStatusComponent },
  { path: 'info-form', component: RegistrationAddtionalInfoComponent },
  {
    path: 'registration',
    children: [
      {
        path: 'skill-source',
        component: RegistrationComponent,
        children: [{ path: 'signUp', component: SignUpComponent }],
      },
    ],
  },
  {
    path: 'registration',
    children: [
      {
        path: 'project-owner',
        component: RegistrationComponent,
        children: [{ path: 'signUp', component: OwnerSignupComponent }],
      },
    ],
  },
  {
    path: 'register-specialist',
    component: RegistrationSpecialistFormComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
