import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STORAGE_KEYS } from 'src/app/core/storage/storage.constants';
import { StorageType } from 'src/app/core/storage/storage.enum';
import { StorageService } from 'src/app/core/storage/storage.service';
import { UserAuthRequest } from 'src/app/services/interface';
import { MessageService } from 'src/app/services/message.service';
import { UserAuthenticationService } from 'src/app/services/user-auth.service';
import { ThemeService } from 'src/theme';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  loginForm!: FormGroup;
  submitted = false;
  userType: string = '';
  private readonly notifier!: NotifierService;
  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthenticationService,
    private messageService: MessageService,
    private router: Router,
    private storageService: StorageService,
    private notifierService: NotifierService,
    private activatedRoute: ActivatedRoute
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => of(params))).subscribe((params: ParamMap) => {
      if (params.has('userType')) {
        this.userType = params.get('userType')?.toString() ?? '';
      }
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }

  authenticateUser(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const userRequest: UserAuthRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.userAuthService.authUser(userRequest).subscribe(
      (response) => {
        if (response) {
          this.storageService.storeValue(StorageType.LocalStorage, STORAGE_KEYS.AuthToken, response.access_token);
          this.storageService.storeValue(StorageType.LocalStorage, STORAGE_KEYS.UserId, response.id);
          //console.log(response.id);
          if (response.type == 'Project Owner') {
            this.router.navigate(['registration/project-owner/signUp']);
          }

          if (response.type == 'Specialist') {
            this.router.navigate(['/register-specialist']);
          }
        }
      },
      (error) => {
        this.notifier.show({
          type: 'info',
          message: error.error,
        });
      }
    );
  }
}
