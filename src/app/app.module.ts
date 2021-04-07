import { NgModule } from '@angular/core';
import { AppModuleConstants } from './app-module.constants';
import { AppComponent } from './app.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
@NgModule({
  declarations: [AppModuleConstants.MODULE_DECLARATIONS, RegistrationListComponent],
  imports: [AppModuleConstants.MODULE_IMPORTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
