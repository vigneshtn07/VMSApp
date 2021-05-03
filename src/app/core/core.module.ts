import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { VMSInterceptor } from './interceptor/httpconfig.interceptor';
import { StorageService } from './storage/storage.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    StorageService,
    { provide: HTTP_INTERCEPTORS, useClass: VMSInterceptor, multi: true },
  ],
})
export class CoreModule {}
