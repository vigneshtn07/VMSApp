import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-owner-phasethree',
  templateUrl: './create-owner-phasethree.component.html',
  styleUrls: ['./create-owner-phasethree.component.scss'],
})
export class CreateOwnerPhasethreeComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<number> = new EventEmitter();
  ownerphasethreeForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ownerphasethreeForm = this.formBuilder.group({
      projectname: ['', Validators.required],
      projectdesc: ['', Validators.required]
    });
  }

  get f() { return this.ownerphasethreeForm.controls; }

  onContinue(): void {
    this.submitted = true;
    // if (this.ownerphasethreeForm.invalid) {
    //   return;
    // }
    this.wizardStepEmitter.next(4);
  }

  navigateBack(): void {
    this.wizardStepEmitter.next(2);
  }
}
