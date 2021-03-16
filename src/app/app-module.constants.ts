
import { BrowserModule } from '@angular/platform-browser';

import { ThemeModule } from 'src/theme';
import { darkTheme } from 'src/theme/variants/app-dark-theme';
import { lightTheme } from 'src/theme/variants/app-light-theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthSuccessComponent } from './components/user-verification-wizard/auth-success/auth-success.component';
import { UserAuthWizardComponent } from './components/user-verification-wizard/user-auth-wizard.component';
import { ConfirmationPromptComponent } from './components/user-verification-wizard/user-verification/confirmation-prompt/confirmation-prompt.component';
import { UserVerificationComponent } from './components/user-verification-wizard/user-verification/user-verification.component';
import { SharedModule } from './shared/shared.module';


export abstract class AppModuleConstants {
    static readonly MODULE_IMPORTS = [
        BrowserModule,
        AppRoutingModule,
        ThemeModule.forRoot({
            themes: [lightTheme, darkTheme],
            active: 'light'
        }),
        SharedModule
    ];
    static readonly MODULE_DECLARATIONS = [
        AppComponent,
        LoginComponent,
        UserVerificationComponent,
        AuthSuccessComponent,
        UserAuthWizardComponent,
        ConfirmationPromptComponent

    ];
    static readonly MODULE_PROVIDERS = [];
}