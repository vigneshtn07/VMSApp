import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { additionalInfoRequest, EditSpecialistRequest, SpecialistRegisterRequest } from 'src/app/services/interface';
import { SpecialistService } from 'src/app/services/specialist.service';
import { CommonService } from 'src/app/services/common.service';
import { STORAGE_KEYS } from 'src/app/core/storage/storage.constants';
import { StorageType } from 'src/app/core/storage/storage.enum';
import { StorageService } from 'src/app/core/storage/storage.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
@Component({
  selector: 'registration-specialist',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationSpecialistFormComponent implements OnInit {
  bsConfig!: Partial<BsDatepickerConfig>;
  modelDate: any;
  specialistregisterForm!: FormGroup;
  submitted = false;

  maskTypes = {
    Phone: {
      guide: false,
      showMask: false,
      mask: MaskInputType.PhoneFormat,
    },
    ZipCode: {
      guide: false,
      showMask: false,
      mask: MaskInputType.Zipcode,
    },
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private specialistService: SpecialistService,
    private commonService: CommonService,
    private storageService: StorageService,
    public datepipe: DatePipe
  ) {
    this.bsConfig = Object.assign(
      {},
      {
        dateInputFormat: 'MM-DD-YYYY',
      }
    );
  }

  ngOnInit(): void {
    console.log(this.storageService.getValueFromStorage(StorageType.LocalStorage, STORAGE_KEYS.UserId));
    this.specialistregisterForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      gender: [null, Validators.required],
      PhoneNumber: ['', Validators.required],
      StreetAddress: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: [null, Validators.required],
      Zipcode: ['', Validators.required],
      PassportNumber: ['', Validators.required],
      LinkedInProfile: ['', Validators.required],
      Roles: ['', Validators.required],
      certify: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.specialistregisterForm.invalid) {
      return;
    }

    const id = JSON.parse(this.storageService.getValueFromStorage(StorageType.LocalStorage, STORAGE_KEYS.UserId));

    const request: EditSpecialistRequest = {
      fname: this.specialistregisterForm.value.firstName,
      lname: this.specialistregisterForm.value.lastName,
      email: this.specialistregisterForm.value.email,
      dob: moment(this.specialistregisterForm.value.dob).format('MM-DD-yyyy'),
      gender: this.specialistregisterForm.value.gender,
      phoneno: this.specialistregisterForm.value.PhoneNumber.replace('-', '')
        .toString()
        .replace('(', '')
        .toString()
        .replace(')', '')
        .toString()
        .replace('-', '')
        .toString(),
      address: this.specialistregisterForm.value.StreetAddress,
      city: this.specialistregisterForm.value.City,
      state: this.specialistregisterForm.value.State,
      country: this.specialistregisterForm.value.Country,
      pincode: this.specialistregisterForm.value.Zipcode.replace('-', '').toString(),
      passNumber: this.specialistregisterForm.value.PassportNumber,
      linkedinLink: this.specialistregisterForm.value.LinkedInProfile,
      roles: this.specialistregisterForm.value.Roles,
      indKnowledge: 'knowledge',
      check: this.specialistregisterForm.value.certify,
      skills: 'skills',
    };

    //console.log(JSON.stringify(request));

    this.specialistService.editregister(request, id).subscribe(
      (response) => {
        console.log(response);
        const request: additionalInfoRequest = {
          fname: this.specialistregisterForm.value.firstName,
          email: this.specialistregisterForm.value.email,
          link: EmailRedirectUrl,
        };
        this.router.navigate(['verify-specialist']);
      },
      (error) => {
        console.error(error.error);
      }
    );
    //   },
    //   (error) => {
    //     console.error(error.error);
    //   }
    // );
  }

  get f() {
    return this.specialistregisterForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.specialistregisterForm.reset();
    this.storageService.clear(StorageType.LocalStorage);
    this.router.navigate(['/login']);
  }
}

const EmailRedirectUrl = 'http://localhost:4200/info-form';
