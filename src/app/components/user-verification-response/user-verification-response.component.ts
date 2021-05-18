import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppLoadingService } from 'src/app/shared/service/app-loading.service';
import { SkillSourceEmailVerify } from 'src/app/interface/index';
import { SpecialistEmailVerify } from 'src/app/interface/index';
import { SkillSourceService } from '../../services/skill-source.service';
import { SpecialistService } from 'src/app/services/specialist.service';
import { ProjectOwnerEmailVerify } from 'src/app/interface/index';
import { ProjectOwnerService } from 'src/app/services/project-owner.service';
import { UserType } from 'src/app/shared/constants/user-type.constant';
import { NotifierService } from 'angular-notifier';

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
  private readonly notifier!: NotifierService;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appLoadingService: AppLoadingService,
    private skillSourceService: SkillSourceService,
    private specialistService: SpecialistService,
    private projectSourceService: ProjectOwnerService,
    notifierService: NotifierService,
  ) { this.notifier = notifierService; }

  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => of(params))).subscribe((params: ParamMap) => {
      if (params.has('userType')) {
        this.authToken = params.get('token')?.toString() ?? '';
        this.userType = params.get('userType')?.toString() ?? '';
        if (this.authToken) {
          // invoke API to authenticate with this token. Add loader until this api complete then show the response either failure / success
          this.appLoadingService.setLoaderState(true);
          if (this.userType === UserType.SkillSource) {
            const request: SkillSourceEmailVerify = {
              string: this.authToken,
            };

            this.skillSourceService.verifyemail(request).subscribe(
              (response) => {
                console.log(response);
                this.isApiFetched = true;
                this.isVerificationSuccess = true;
                this.appLoadingService.setLoaderState(false);
              },
              (error) => {
                this.showError(error);
                this.isApiFetched = true;
                this.isVerificationSuccess = false;
                this.appLoadingService.setLoaderState(false);
              }
            );

          } else if (this.userType === UserType.Specialist) {
            const request: SpecialistEmailVerify = {
              string: this.authToken,
            };

            this.specialistService.verifyemail(request).subscribe(
              (response) => {
                this.isApiFetched = true;
                this.isVerificationSuccess = true;
                this.appLoadingService.setLoaderState(false);
              },
              (error) => {
                this.showError(error);
                this.isApiFetched = true;
                this.isVerificationSuccess = false;
                this.appLoadingService.setLoaderState(false);
              }
            );
          } else if (this.userType == UserType.ProjectOwner) {
            const request: ProjectOwnerEmailVerify = {
              string: this.authToken,
            };

            this.projectSourceService.verifyemail(request).subscribe(
              (response) => {
                this.isApiFetched = true;
                this.isVerificationSuccess = true;
                this.appLoadingService.setLoaderState(false);
              },
              (error) => {
                this.showError(error.error);
                this.isApiFetched = true;
                this.isVerificationSuccess = false;
                this.appLoadingService.setLoaderState(false);
              }
            );

          }
        }
      }
    });
  }

  navigateToSignUp(): void {
    this.router.navigate([`login/${this.userType}`]);
  }

  showError(error: any): void {
    this.notifier.show({
      type: 'info',
      message: error.error,
    });
  }

}
