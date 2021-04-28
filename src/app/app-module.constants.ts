import { BrowserModule } from '@angular/platform-browser';
import { KnobModule } from 'primeng/knob';
import { ThemeModule } from 'src/theme';
import { darkTheme } from 'src/theme/variants/app-dark-theme';
import { lightTheme } from 'src/theme/variants/app-light-theme';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthSuccessComponent } from './components/user-verification-wizard/auth-success/auth-success.component';
import { UserAuthWizardComponent } from './components/user-verification-wizard/user-auth-wizard.component';
import { ConfirmationPromptComponent } from './components/user-verification-wizard/user-verification/confirmation-prompt/confirmation-prompt.component';
import { UserVerificationComponent } from './components/user-verification-wizard/user-verification/user-verification.component';
import { SharedModule } from './shared/shared.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SignUpComponent } from './components/registration/skill-source/sign-up/sign-up.component';
import { SignupPhaseOneComponent } from './components/registration/skill-source/sign-up/signup-phase-one/signup-phase-one.component';
import { SignupPhaseTwoComponent } from './components/registration/skill-source/sign-up/signup-phase-two/signup-phase-two.component';
import { SignupPhaseThreeComponent } from './components/registration/skill-source/sign-up/signup-phase-three/signup-phase-three.component';
import { SignupPhaseFourComponent } from './components/registration/skill-source/sign-up/signup-phase-four/signup-phase-four.component';
import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { RegistrationStatusComponent } from './components/registration-status/registration-status.component';
import { RegistrationAddtionalInfoComponent } from './components/registration-addtional-info/registration-addtional-info.component';
import { RegistrationResponseComponent } from './components/registration/skill-source/sign-up/registration-response/registration-response.component';
import { RegistrationSpecialistFormComponent } from './components/registration/specialist/registration-form/registration-form.component';
import { CreateOwnerPhasefourComponent } from './components/registration/project-owner/owner-signup/create-owner-phasefour/create-owner-phasefour.component';
import { CreateOwnerPhaseoneComponent } from './components/registration/project-owner/owner-signup/create-owner-phaseone/create-owner-phaseone.component';
import { CreateOwnerPhasethreeComponent } from './components/registration/project-owner/owner-signup/create-owner-phasethree/create-owner-phasethree.component';
import { CreateOwnerPhasetwoComponent } from './components/registration/project-owner/owner-signup/create-owner-phasetwo/create-owner-phasetwo.component';
import { CreateOwnerResponseComponent } from './components/registration/project-owner/owner-signup/create-owner-response/create-owner-response.component';
import { OwnerSignupComponent } from './components/registration/project-owner/owner-signup/owner-signup.component';
import { RegistrationSuccessComponent } from './components/registration/specialist/registration-success/registration-success.component';
import { VerificationResponseComponent } from './components/verify-admins/verification-response/verification-response.component';
import { VerifyAdminsComponent } from './components/verify-admins/verify-admins.component';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { BusinessAdminModule } from './business-admin/business-admin.module';
import { TechnicalAdminModule } from './technical-admin/technical-admin.module';

export abstract class AppModuleConstants {
  static readonly MODULE_IMPORTS = [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    KnobModule,
    SuperAdminModule,
    BusinessAdminModule,
    TechnicalAdminModule,
    HttpClientModule,
  ];
  static readonly MODULE_DECLARATIONS = [
    AppComponent,
    LoginComponent,
    UserVerificationComponent,
    AuthSuccessComponent,
    UserAuthWizardComponent,
    ConfirmationPromptComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    SignUpComponent,
    SignupPhaseOneComponent,
    SignupPhaseTwoComponent,
    SignupPhaseThreeComponent,
    SignupPhaseFourComponent,
    CreatePasswordComponent,
    RegistrationStatusComponent,
    RegistrationAddtionalInfoComponent,
    RegistrationResponseComponent,
    RegistrationResponseComponent,
    RegistrationSpecialistFormComponent,
    SignUpComponent,
    CreateOwnerPhaseoneComponent,
    CreateOwnerPhasetwoComponent,
    CreateOwnerPhasethreeComponent,
    CreateOwnerPhasefourComponent,
    CreateOwnerResponseComponent,
    OwnerSignupComponent,
    RegistrationSuccessComponent,
    VerifyAdminsComponent,
    VerificationResponseComponent,
    RegistrationComponent,
  ];
  static readonly MODULE_PROVIDERS = [];
}
