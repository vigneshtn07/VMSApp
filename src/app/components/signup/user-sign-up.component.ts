import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { SkillSourceRegisterRequest, SkillSourceResendEmail } from '../../services/interface/index';
import { SpecialistRegisterRequest, SpecialistResendEmail } from '../../services/interface/index';
import { SkillSourceService } from '../../services/skill-source.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserType } from 'src/app/shared/constants/user-type.constant';
import { SpecialistService } from 'src/app/services/specialist.service';
import { ProjectOwnerRegisterRequest, ProjectOwnerResendEmail } from 'src/app/services/interface';
import { ProjectOwnerService } from 'src/app/services/project-owner.service';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: 'app-skill-source',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss'],
})
export class UserSignUpComponent implements OnInit {
  modalRef!: BsModalRef;
  showPassword = {
    password: false,
    confirmPassword: false,
  };
  emailId!: string;
  username!: string;
  skillsignupForm!: FormGroup;
  submitted = false;
  userType: string = '';

  private readonly notifier!: NotifierService;
  constructor(
    notifierService: NotifierService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private skillSourceService: SkillSourceService,
    private activatedRoute: ActivatedRoute,
    private specialistService: SpecialistService,
    private projectSourceService: ProjectOwnerService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.skillsignupForm = this.formBuilder.group(
      {
        // uname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        NewPassword: [
          '',
          [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)],
        ],
        ConfirmPassword: ['', [Validators.required]],
      },
      {
        validator: MustMatch('NewPassword', 'ConfirmPassword'),
      }
    );
    this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => of(params))).subscribe((params: ParamMap) => {
      if (params.has('userType')) {
        this.userType = params.get('userType')?.toString() ?? '';
      }
    });
  }

  get f() {
    return this.skillsignupForm.controls;
  }

  onSubmit(template: TemplateRef<any>): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.skillsignupForm.invalid) {
      return;
    }
    if (this.userType === UserType.SkillSource) {
      const request: SkillSourceRegisterRequest = {
        email: this.skillsignupForm.value.email,
        password: this.skillsignupForm.value.NewPassword,
      };

      this.skillSourceService.register(request).subscribe(
        (response) => {
          console.log(response);
          this.showSuccess('Your Registration has been completed.Verification Link sent to your Email');
          this.showVerificationPopup(template);
        },
        (error) => {
          this.showError(error);
        }
      );
    } else if (this.userType === UserType.Specialist) {
      const request: SpecialistRegisterRequest = {
        email: this.skillsignupForm.value.email,
        password: this.skillsignupForm.value.NewPassword,
      };

      this.specialistService.register(request).subscribe(
        (response) => {
          this.showSuccess('Your Registration has been completed.Verification Link sent to your Email');
          this.showVerificationPopup(template);
        },
        (error) => {
          this.showError(error);
        }
      );
    } else if (this.userType == UserType.ProjectOwner) {
      const request: ProjectOwnerRegisterRequest = {
        "email": this.skillsignupForm.value.email,
        "password": this.skillsignupForm.value.NewPassword
      };

      this.projectSourceService.register(request).subscribe(
        (response) => {
          this.showSuccess('Your Registration has been completed.Verification Link sent to your Email');
          this.showVerificationPopup(template);
        },
        (error) => {
          this.showError(error.error);
        }
      );

    }
  }

  showError(error: any): void {
    this.notifier.show({
      type: 'info',
      message: error.error,
    });
  }

  showSuccess(msg: any): void {
    this.notifier.show({
      type: 'success',
      message: msg,
    });
  }

  showVerificationPopup(template: TemplateRef<any>): void {
    this.emailId = this.skillsignupForm.value.email;
    this.username = this.skillsignupForm.value.uname;
    this.modalRef = this.modalService.show(template);
  }

  onResend(): void {

    if (this.userType === UserType.SkillSource) {

      const request: SkillSourceResendEmail = {
        fname: this.username,
        email: this.emailId,
      };

      this.skillSourceService.resendemail(request).subscribe(
        (response) => {
          this.showSuccess('Verification link to your email address');
        },
        (error) => {
          console.error(error.error);
          this.showError(error.error);
        }
      );
    } else if (this.userType === UserType.Specialist) {
      const request: SpecialistResendEmail = {
        fname: this.username,
        email: this.emailId,
      };

      this.specialistService.resendemail(request).subscribe(
        (response) => {
          this.showSuccess('Verification link to your email address');
        },
        (error) => {
          console.error(error.error);
          this.showError(error.error);
        }
      );
    } else if (this.userType === UserType.ProjectOwner) {
      const request: ProjectOwnerResendEmail = {
        fname: this.username,
        email: this.emailId,
      };

      this.projectSourceService.resendemail(request).subscribe(
        (response) => {
          this.showSuccess('Verification link to your email address');
        },
        (error) => {
          console.error(error.error);
          this.showError(error.error);
        }
      );
    }
  }
}
// function MustMatch(arg0: string, arg1: string): any {
//   throw new Error('Function not implemented.');
// }
