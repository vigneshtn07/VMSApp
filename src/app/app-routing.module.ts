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
import { RegistrationSuccessComponent } from './components/registration/specialist/registration-success/registration-success.component';
import { AuthSuccessComponent } from './components/user-verification-wizard/auth-success/auth-success.component';
import { UserVerificationComponent } from './components/user-verification-wizard/user-verification/user-verification.component';
import { VerificationResponseComponent } from './components/verify-admins/verification-response/verification-response.component';
import { VerifyAdminsComponent } from './components/verify-admins/verify-admins.component';
import { AdminRegistrationComponent } from './super-admin/pages/admin-registration/admin-registration.component';
import { DashboardComponent } from './super-admin/pages/dashboard/dashboard.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';

const SUPER_ADMIN_ROUTES: Routes = [
  {
    path: 'super-admin',
    component: SuperAdminComponent,
    children: [
      { path: 'registration/:id', component: AdminRegistrationComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'verify-user', component: UserVerificationComponent },
  { path: 'verify-user/AuthSucess/:id', component: AuthSuccessComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'create-password', component: CreatePasswordComponent },
  { path: 'registration-status', component: RegistrationStatusComponent },
  { path: 'info-form', component: RegistrationAddtionalInfoComponent },
  {
    path: 'verify-email',
    children: [
      { path: 'admin', component: VerifyAdminsComponent },
      { path: 'response', component: VerificationResponseComponent },
    ],
  },
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
    path: 'verify-specialist',
    component: RegistrationSuccessComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  ...SUPER_ADMIN_ROUTES,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
