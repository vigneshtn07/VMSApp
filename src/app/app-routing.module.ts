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
import { BADashboardComponent } from './business-admin/pages/dashboard/dashboard.component';
import { BadminRegistrationComponent } from './business-admin/pages/badmin-registration/badmin-registration.component';
import { BusinessAdminComponent } from './business-admin/business-admin.component';

import { AppSidebarComponent } from './shared/components/app-sidebar/app-sidebar.component';
import { VmsEmailComponent } from './shared/components/vms-email/vms-email.component';
import { TechnicalAdminComponent } from './technical-admin/technical-admin.component';
import { TDashboardComponent } from './technical-admin/pages/dashboard/dashboard.component';
import { TAdminRegistrationComponent } from './technical-admin/pages/admin-registration/admin-registration.component';
import { ProjectsListComponent } from './super-admin/pages/projects-list/projects-list.component';

const SUPER_ADMIN_ROUTES: Routes = [
  {
    path: 'super-admin',
    component: SuperAdminComponent,
    children: [
      { path: 'registration/:id', component: AdminRegistrationComponent },
      {
        path: 'projects',
        component: ProjectsListComponent,
        data: { breadcrumbMenu: 'projects' },
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

const BUSINESS_ADMIN_ROUTES: Routes = [
  {
    path: 'business-admin',
    component: BusinessAdminComponent,
    children: [
      { path: 'registration/:id', component: BadminRegistrationComponent },
      { path: 'dashboard', component: BADashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

const TECHNICAL_ADMIN_ROUTES: Routes = [
  {
    path: 'technical-admin',
    component: TechnicalAdminComponent,
    children: [
      { path: 'registration/:id', component: TAdminRegistrationComponent },
      { path: 'dashboard', component: TDashboardComponent },
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
  {
    path: 'Notification',
    component: AppSidebarComponent,
  },
  {
    path: 'Mail',
    component: VmsEmailComponent,
  },
  ...SUPER_ADMIN_ROUTES,
  ...BUSINESS_ADMIN_ROUTES,
  ...TECHNICAL_ADMIN_ROUTES,
  // ,{ path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
