import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent implements OnInit {
  collapsed: boolean = false;
  @Input('menuSrc') menus: any;
  @Output('onToogleChange') emitToogleChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toogleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.emitToogleChange.emit(this.collapsed);
  }
}
