import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppLoadingService } from 'src/app/shared/service/app-loading.service';

@Component({
  selector: 'app-user-verification-response',
  templateUrl: './user-verification-response.component.html',
  styleUrls: ['./user-verification-response.component.scss'],
})
export class UserVerificationResponseComponent implements OnInit {
  authToken: string = '';
  userType: string = '';
  isVerificationSuccess: boolean = false;
  isApiFetched: boolean = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appLoadingService: AppLoadingService
  ) {}

  ngOnInit(): void {
    this.appLoadingService.setLoaderState(true);
    this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => of(params))).subscribe((params: ParamMap) => {
      if (params.has('userType')) {
        this.authToken = params.get('token')?.toString() ?? '';
        this.userType = params.get('userType')?.toString() ?? '';
        if (this.authToken) {
          // invoke API to authenticate with this token. Add loader until this api complete then show the response either failure / success
          this.isApiFetched = true;
          this.isVerificationSuccess = true;
          //this.appLoadingService.setLoaderState(true);
        }
      }
    });
  }

  navigateToSignUp(): void {
    this.router.navigate([`login/${this.userType}`]);
  }
}
