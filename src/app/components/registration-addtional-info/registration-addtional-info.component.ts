import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-addtional-info',
  templateUrl: './registration-addtional-info.component.html',
  styleUrls: ['./registration-addtional-info.component.scss']
})
export class RegistrationAddtionalInfoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  infoForm!: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      details: ['', [Validators.required]],
      WForm: ['', Validators.required],
    });
  }

  get f() {
    return this.infoForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.infoForm.invalid) {
      return;
    }
  }


}
