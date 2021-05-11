import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { SkillSourceRegisterRequest, SkillSourceResendEmail } from '../../services/interface/index';
import { SkillSourceService } from '../../services/skill-source.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
    private activatedRoute: ActivatedRoute
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.skillsignupForm = this.formBuilder.group(
      {
        uname: ['', [Validators.required]],
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

    const request: SkillSourceRegisterRequest = {
      cname: this.skillsignupForm.value.uname,
      email: this.skillsignupForm.value.email,
      password: this.skillsignupForm.value.NewPassword,
    };

    this.skillSourceService.register(request).subscribe(
      (response) => {
        console.log(response);
        this.notifier.show({
          type: 'success',
          message: 'Your Registration has been completed.Verification Link sent to your Email',
        });
        this.emailId = this.skillsignupForm.value.email;
        this.username = this.skillsignupForm.value.uname;
        this.modalRef = this.modalService.show(template);
      },
      (error) => {
        console.error(error.error);
        this.notifier.show({
          type: 'info',
          message: error.error,
        });
      }
    );
  }
  onResend(): void {
    const request: SkillSourceResendEmail = {
      fname: this.username,
      email: this.emailId,
    };

    this.skillSourceService.resendemail(request).subscribe(
      (response) => {
        console.log(response);
        this.notifier.show({
          type: 'success',
          message: 'Verification link to your email address',
        });
      },
      (error) => {
        console.error(error.error);
        this.notifier.show({
          type: 'info',
          message: error.error,
        });
      }
    );
  }
}
function MustMatch(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}
