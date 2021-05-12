import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppLoadingService } from '../../service/app-loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss'],
})
export class AppLoaderComponent implements OnInit {
  constructor(private appLoadingService: AppLoadingService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.appLoadingService.getLoaderState().subscribe((loadingState: boolean) => {
      if (loadingState) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
