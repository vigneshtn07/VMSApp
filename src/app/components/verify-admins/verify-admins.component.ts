import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { SpecialistService } from 'src/app/services/specialist.service';
import { NotifierService } from 'angular-notifier';
import { SpecialistRegisterRequest, SpecialistResendEmail } from 'src/app/interface/index';

@Component({
    selector: 'app-verify-admins',
    templateUrl: './verify-admins.component.html',
    styleUrls: ['./verify-admins.component.scss'],
})
export class VerifyAdminsComponent implements OnInit {
    modalRef!: BsModalRef;
    showPassword = {
        password: false,
        confirmPassword: false,
    };
    emailId!: string;
    verifyadminForm!: FormGroup;
    submitted = false;
    private readonly notifier!: NotifierService;
    constructor(
        notifierService: NotifierService,
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private specialistservice: SpecialistService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {
        this.verifyadminForm = this.formBuilder.group(
            {
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
        return this.verifyadminForm.controls;
    }

    onSubmit(template: TemplateRef<any>): void {
        this.submitted = true;
        // stop here if form is invalid
        if (this.verifyadminForm.invalid) {
            return;
        }

        const request: SpecialistRegisterRequest = {
            email: this.verifyadminForm.value.email,
            password: this.verifyadminForm.value.NewPassword,
        };

        this.specialistservice.register(request).subscribe(
            (response) => {
                this.notifier.show({
                    type: 'success',
                    message: 'Your Registration has been completed.Verification Link sent to your Email',
                });
                this.emailId = this.verifyadminForm.value.email;
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
        const request: SpecialistResendEmail = {
            fname: '',
            email: this.emailId,
        };

        this.specialistservice.resendemail(request).subscribe(
            (response) => {
                this.notifier.show({
                    type: 'success',
                    message: 'Verification link sent to your email address',
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
