import { NgModule } from '@angular/core';
import { AppModuleConstants } from './app-module.constants';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
@NgModule({
  declarations: [AppModuleConstants.MODULE_DECLARATIONS, HomeLandingComponent],
  imports: [AppModuleConstants.MODULE_IMPORTS],
  providers: [AppModuleConstants.MODULE_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
