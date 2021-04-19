import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'menu-breadcrumb',
  templateUrl: './menu-breadcrumb.component.html',
  styleUrls: ['./menu-breadcrumb.component.scss'],
})
export class MenuBreadcrumbComponent implements OnInit {
  lastRoutePath: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    const routerUrl = this.router.url;
    this.lastRoutePath = routerUrl.substr(
      routerUrl.lastIndexOf('/') + 1,
      routerUrl.length - 1
    );
  }
}
