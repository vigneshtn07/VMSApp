import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';

@Component({
  selector: 'app-registration-specialist',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationSpecialistFormComponent implements OnInit {
  bsConfig!: Partial<BsDatepickerConfig>;
  modelDate: any;

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigate(['verify-specialist']);
  }
}
