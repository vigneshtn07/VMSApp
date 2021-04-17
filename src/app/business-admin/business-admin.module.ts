import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessAdminComponent } from './business-admin/business-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';



@NgModule({
  declarations: [BusinessAdminComponent, DashboardComponent, AdminRegistrationComponent],
  imports: [
    CommonModule
  ]
})
export class BusinessAdminModule { }
