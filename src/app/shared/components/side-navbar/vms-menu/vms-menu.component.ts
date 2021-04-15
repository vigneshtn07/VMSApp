import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vms-menu',
  templateUrl: './vms-menu.component.html',
  styleUrls: ['./vms-menu.component.scss'],
})
export class VmsMenuComponent implements OnInit {
  @Input() src: any;
  constructor() {}

  ngOnInit(): void {}

  expandSubMenu(menuItem: any, event: any) {
    if (menuItem.subMenu) {
      menuItem.expandSubMenu = !menuItem.expandSubMenu;
    } else {
      event.stopPropagation();
    }
  }
}
