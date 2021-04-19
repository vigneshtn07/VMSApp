import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { SuperAdminComponent } from './super-admin.component';
import { RouterModule } from '@angular/router';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RegistrationListComponent,
    AdminRegistrationComponent,
    SuperAdminComponent,
    ProjectsListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgImageFullscreenViewModule,
    RouterModule,
  ],
  exports: [],
})
export class SuperAdminModule {}
