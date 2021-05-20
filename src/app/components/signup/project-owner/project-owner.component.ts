import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { NotifierService } from 'angular-notifier';
import { ProjectOwnerRegisterRequest, ProjectOwnerResendEmail } from 'src/app/interface/index';
import { ProjectOwnerService } from 'src/app/services/project-owner.service';

@Component({
    selector: 'app-project-owner',
    templateUrl: './project-owner.component.html',
    styleUrls: ['./project-owner.component.scss'],
})
export class ProjectOwnerComponent implements OnInit {
    modalRef!: BsModalRef;
    showPassword = {
        password: false,
        confirmPassword: false,
    };
    emailId!: string;
    username!: string;
    projectsignupForm!: FormGroup;
    submitted = false;
    private readonly notifier!: NotifierService;
    constructor(
        notifierService: NotifierService,
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private projectSourceService: ProjectOwnerService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {
        this.projectsignupForm = this.formBuilder.group(
            {
                uname: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                NewPassword: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
                ConfirmPassword: ['', [Validators.required]],
            },
            {
                validator: MustMatch('NewPassword', 'ConfirmPassword'),
            }
        );
    }

    get f() {
        return this.projectsignupForm.controls;
    }

    onSubmit(template: TemplateRef<any>): void {
        this.submitted = true;
        // stop here if form is invalid
        if (this.projectsignupForm.invalid) {
            return;
        }

        const request: ProjectOwnerRegisterRequest = {
            // "cname": this.projectsignupForm.value.uname,
            email: this.projectsignupForm.value.email,
            password: this.projectsignupForm.value.NewPassword,
        };

        this.projectSourceService.register(request).subscribe(
            (response) => {
                this.notifier.show({
                    type: 'success',
                    message: 'Your Registration has been completed.Verification Link sent to your Email',
                });
                this.emailId = this.projectsignupForm.value.email;
                this.username = this.projectsignupForm.value.uname;
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
        const request: ProjectOwnerResendEmail = {
            fname: this.username,
            email: this.emailId,
        };

        this.projectSourceService.resendemail(request).subscribe(
            (response) => {
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
