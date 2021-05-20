import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { of } from 'rxjs';
import { UserType } from 'src/app/shared/constants/user-type.constant';
import { SkillSourceService } from 'src/app/services/skill-source.service';
import { SkillSourceRegistrationStatus } from 'src/app/interface/index';
import { ProjectOwnerService } from 'src/app/services/project-owner.service';
//import { ProjectOwnerRegistrationStatusResponse } from 'src/app/services/interface';
import { AppLoadingService } from 'src/app/shared/service/app-loading.service';

@Component({
    selector: 'app-registration-status',
    templateUrl: './registration-status.component.html',
    styleUrls: ['./registration-status.component.scss'],
})
export class RegistrationStatusComponent implements OnInit {
    regstatusForm!: FormGroup;
    submitted = false;
    userType: string = '';
    isVerificationSuccess: boolean = false;
    isApiFetched: boolean = false;
    status: string = '';

    private readonly notifier!: NotifierService;
    constructor(
        private formBuilder: FormBuilder,
        private appLoadingService: AppLoadingService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private skillsourceservice: SkillSourceService,
        private notifierService: NotifierService,
        private projectownerService: ProjectOwnerService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {
        this.regstatusForm = this.formBuilder.group({
            RegId: ['', [Validators.required]],
        });
        this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => of(params))).subscribe((params: ParamMap) => {
            if (params.has('userType')) {
                this.userType = params.get('userType')?.toString() ?? '';
            }
        });
    }

    get f() {
        return this.regstatusForm.controls;
    }

    onSubmit(): void {
        this.submitted = true;
        // stop here if form is invalid
        if (this.regstatusForm.invalid) {
            return;
        }
        const userRequest: SkillSourceRegistrationStatus = {
            email: this.regstatusForm.value.RegId,
        };

        this.appLoadingService.setLoaderState(true);
        if (this.userType == UserType.SkillSource) {
            this.skillsourceservice.registrationstatus(userRequest).subscribe(
                (response: any) => {
                    if (response) {
                        this.status = 'Your Application is ' + response;
                        this.isVerificationSuccess = true;
                        this.appLoadingService.setLoaderState(false);
                    }
                },
                (error) => {
                    this.status = 'No User exists with this email';
                    this.isVerificationSuccess = false;
                    this.appLoadingService.setLoaderState(false);
                }
            );
        }
        if (this.userType == UserType.ProjectOwner) {
            this.projectownerService.registrationstatus(userRequest).subscribe(
                (response: any) => {
                    if (response) {
                        this.status = 'Your Application is ' + response;
                        this.isVerificationSuccess = true;
                        this.appLoadingService.setLoaderState(false);
                    }
                },
                (error) => {
                    this.status = 'No User exists with this email';
                    this.isVerificationSuccess = false;
                    this.appLoadingService.setLoaderState(false);
                }
            );
        }
    }
}
