import { NgModule } from '@angular/core';
import { AppModuleConstants } from './app-module.constants';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppModuleConstants.MODULE_DECLARATIONS],
  imports: [AppModuleConstants.MODULE_IMPORTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
