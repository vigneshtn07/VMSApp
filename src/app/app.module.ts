import { NgModule } from '@angular/core';
import { AppModuleConstants } from './app-module.constants';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationPromptComponent } from './components/user-verification-wizard/user-verification/confirmation-prompt/confirmation-prompt.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    AppModuleConstants.MODULE_DECLARATIONS,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    AppModuleConstants.MODULE_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
