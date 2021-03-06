import { Component, OnInit } from '@angular/core';
import { VmsNotificationComponent } from 'src/app/shared/components/vms-notification/vms-notification.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavbarComponent implements OnInit {
  showNotification: boolean | any;
  public show: boolean = true;
  isOpened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpened = !this.isOpened;
  }
}
