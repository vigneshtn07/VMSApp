import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vms-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss'],
})
export class HomeLandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollToElement(fragmentId: string) {
    const element = document.getElementById(fragmentId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
