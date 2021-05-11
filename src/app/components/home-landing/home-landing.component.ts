import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/shared/constants/user-type.constant';

@Component({
  selector: 'vms-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss'],
})
export class HomeLandingComponent implements OnInit {
  userTypes: {
    [key: string]: string;
  };

  constructor(private router: Router) {
    this.userTypes = {
      SuperAdmin: UserType.SuperAdmin,
      Specialist: UserType.Specialist,
      SkillSource: UserType.SkillSource,
      ProjectOwner: UserType.ProjectOwner,
    };
  }

  ngOnInit(): void {}

  scrollToElement(fragmentId: string): void {
    const element = document.getElementById(fragmentId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  navigateToSignUp(userType: string): void {
    this.router.navigate([`signup/${userType}`]);
  }

  navigateToSignIn(userType: string): void {
    this.router.navigate([`login/${userType}`]);
  }
}
