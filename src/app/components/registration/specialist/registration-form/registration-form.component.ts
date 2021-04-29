import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-specialist',
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

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
      certify: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.specialistregisterForm.invalid) {
      return;
    }
    //alert(JSON.stringify(this.specialistregisterForm.value));
    this.router.navigate(['verify-specialist']);
  }

  get f() { return this.specialistregisterForm.controls; }

  onReset() {
    this.submitted = false;
    this.specialistregisterForm.reset();
  }

}
