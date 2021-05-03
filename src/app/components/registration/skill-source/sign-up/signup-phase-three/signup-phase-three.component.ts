import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-phase-three',
  templateUrl: './signup-phase-three.component.html',
  styleUrls: ['./signup-phase-three.component.scss'],
})
export class SignupPhaseThreeComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<number> = new EventEmitter();
  skillphasethreeForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.skillphasethreeForm = this.formBuilder.group({
      TopTechSkills: ['', Validators.required],
      serviceQualityPolicy: ['', Validators.required],
      offerTraining: ['', Validators.required],
      BenefitsProvides: [false, Validators.requiredTrue]
    });
  }
  get f() { return this.skillphasethreeForm.controls; }

  onContinue(): void {
    // this.submitted = true;
    // if (this.skillphasethreeForm.invalid) {
    //   return;
    // }
    this.wizardStepEmitter.next(4);
  }

  navigateBack(): void {
    this.wizardStepEmitter.next(2);
  }
}
