import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {
  BsDatepickerViewMode,
  BsDatepickerConfig,
} from 'ngx-bootstrap/datepicker';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-phase-two',
  templateUrl: './signup-phase-two.component.html',
  styleUrls: ['./signup-phase-two.component.scss'],
})
export class SignupPhaseTwoComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<number> = new EventEmitter();
  minMode: BsDatepickerViewMode = 'year';
  bsConfig: Partial<BsDatepickerConfig>;
  modelDate: any;
  areaOfSpecialization: any;

  industryDropDownList: any;
  specializationDropDownList: any;
  industrySelectedItems: any;
  dropdownSettings = {};

  maskTypes = {
    ZipCode: {
      guide: false,
      showMask: false,
      mask: MaskInputType.Zipcode,
    },
    Phone: {
      guide: false,
      showMask: false,
      mask: MaskInputType.PhoneFormat,
    },
  };

  skillphasetwoForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.bsConfig = Object.assign(
      {},
      {
        minMode: this.minMode,
        dateInputFormat: 'YYYY',
      }
    );
  }

  ngOnInit(): void {
    this.industryDropDownList = [
      { item_id: 1, item_text: 'IT' },
      { item_id: 2, item_text: 'Marketing' },
      { item_id: 3, item_text: 'Sales' },
      { item_id: 4, item_text: 'Designing' },
      { item_id: 5, item_text: 'Coaching' },
    ];
    this.specializationDropDownList = [
      { item_id: 1, item_text: 'IT' },
      { item_id: 2, item_text: 'Marketing' },
      { item_id: 3, item_text: 'Sales' },
      { item_id: 4, item_text: 'Designing' },
      { item_id: 5, item_text: 'Coaching' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
    };
    this.skillphasetwoForm = this.formBuilder.group({
      stateOfIncorporation: ['', Validators.required],
      establishedYear: ['', Validators.required],
      industrySelectedItems: ['', [Validators.required]],
      Division: ['', [Validators.required]],
      payroll: [null, Validators.required],
      Specialization: ['', [Validators.required]],
      // AnnualRevenue: ['', Validators.required],
      TotalEmployees: ['', Validators.required],
      TotalFullTimeEmployees: ['', Validators.required],
      TotalSubContractors: ['', Validators.required],
      Worker: [null, Validators.required],
      TotalH1BVisa: ['', Validators.required],
      Website: ['', Validators.required],
      USHeadQuarters: ['', Validators.required],
      StreetAddress: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: [null, Validators.required],
      Zipcode: ['', Validators.required],
      AName: ['', Validators.required],
      Aemail: ['', [Validators.required, Validators.email]],
      APhone: ['', Validators.required],
      Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Phone: ['', Validators.required],
    });
  }

  get f() { return this.skillphasetwoForm.controls; }
  onContinue(): void {
    this.submitted = true;
    // if (this.skillphasetwoForm.invalid) {
    //   return;
    // }
    this.wizardStepEmitter.next(3);
  }

  navigateBack(): void {
    this.wizardStepEmitter.next(1);
  }

  onOpenCalendar(container: any) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('year');
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
