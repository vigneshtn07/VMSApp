import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss'],
})
export class SuperAdminComponent implements OnInit {
  collapsed: boolean = false;
  constructor() {}

  ngOnInit() {}
}
