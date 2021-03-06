import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-admin',
  templateUrl: './business-admin.component.html',
  styleUrls: ['./business-admin.component.scss']
})
export class BusinessAdminComponent implements OnInit {
  collapsed: boolean = false;
  superAdminMenus: any;
  constructor() {
    this.superAdminMenus = [
      {
        menu: 'Home',
        link: '',
        otherData: null,
        subMenu: null,
        expandSubMenu: false,
      },
      {
        menu: 'Registration Management',
        link: '',
        otherData: null,
        subMenu: null,
        expandSubMenu: false,
      },
      {
        menu: 'Project Management',
        link: '',
        otherData: null,
        subMenu: null,
        expandSubMenu: false,
      },
      {
        menu: 'Account Management',
        link: '',
        otherData: null,
        expandSubMenu: false,
        subMenu: [
          {
            menu: 'Project Owner',
            link: '',
            otherData: null,
            subMenu: null,
            expandSubMenu: false,
          },
          {
            menu: 'Skill Source',
            link: '',
            otherData: null,
            subMenu: null,
            expandSubMenu: false,
          },
          {
            menu: 'Specialist',
            link: '',
            otherData: null,
            subMenu: null,
            expandSubMenu: false,
          },
        ],
      },
      {
        menu: 'Subscription Management',
        link: '',
        otherData: null,
        subMenu: null,
        expandSubMenu: false,
      },
      {
        menu: 'App Management',
        link: '',
        otherData: null,
        subMenu: null,
        expandSubMenu: false,
      },
      {
        menu: 'Release Management',
        link: '',
        otherData: null,
        subMenu: null,
        expandSubMenu: false,
      },
      {
        menu: 'Ticket Management',
        link: '',
        otherData: null,
        subMenu: null,
        expandSubMenu: false,
      },
    ];
   }

  ngOnInit(): void {
  }
  
  toogleSideNavBar(event: any): void {
    this.collapsed = event;
  }

}
