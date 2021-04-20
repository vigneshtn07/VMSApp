import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'menu-breadcrumb',
  templateUrl: './menu-breadcrumb.component.html',
  styleUrls: ['./menu-breadcrumb.component.scss'],
})
export class MenuBreadcrumbComponent implements OnInit {
  lastRoutePath: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
