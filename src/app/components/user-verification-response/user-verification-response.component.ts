import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-verification-response',
  templateUrl: './user-verification-response.component.html',
  styleUrls: ['./user-verification-response.component.scss'],
})
export class UserVerificationResponseComponent implements OnInit {
  authToken: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => of(params))).subscribe((params: ParamMap) => {
      if (params.has('userType')) {
        this.authToken = params.get('userType')?.toString() ?? '';
        if (this.authToken) {
          // invoke API to authenticate with this token. Add loader until this api complete then show the response either failure / success
        }
      }
    });
  }

  navigateToSignUp(): void {
    this.router.navigate(['login']);
  }
}
