import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { TechnicalAdminComponent } from './technical-admin.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { TAdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { TDashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TechnicalAdminComponent, RegistrationListComponent, TAdminRegistrationComponent, TDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgImageFullscreenViewModule,
    RouterModule,
  ]
})
export class TechnicalAdminModule { }
