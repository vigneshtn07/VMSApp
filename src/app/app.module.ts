import { NgModule } from '@angular/core';
import { AppModuleConstants } from './app-module.constants';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppModuleConstants.MODULE_DECLARATIONS],
  imports: [AppModuleConstants.MODULE_IMPORTS],
  providers: [AppModuleConstants.MODULE_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
