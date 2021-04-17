import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { BADashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { BusinessAdminComponent } from './business-admin.component';
import { RouterModule } from '@angular/router';
import { BadminRegistrationComponent } from './pages/badmin-registration/badmin-registration.component';



@NgModule({
  declarations: [BusinessAdminComponent, BADashboardComponent, RegistrationListComponent, BadminRegistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgImageFullscreenViewModule,
    RouterModule,
  ],
  exports: [],
})
export class BusinessAdminModule { }
