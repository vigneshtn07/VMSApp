import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-status',
  templateUrl: './registration-status.component.html',
  styleUrls: ['./registration-status.component.scss']
})
export class RegistrationStatusComponent implements OnInit {

  regstatusForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regstatusForm = this.formBuilder.group({
      RegId: ['', [Validators.required]]
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
  }

}
