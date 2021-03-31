import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  BsDatepickerViewMode,
  BsDatepickerConfig,
} from 'ngx-bootstrap/datepicker';
import { MaskInputType } from 'src/app/shared/constants/masking.constant';

@Component({
  selector: 'app-create-owner-phasetwo',
  templateUrl: './create-owner-phasetwo.component.html',
  styleUrls: ['./create-owner-phasetwo.component.scss'],
})
export class CreateOwnerPhasetwoComponent implements OnInit {
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
  constructor() {
    this.bsConfig = Object.assign(
      {},
      {
        minMode: this.minMode,
        dateInputFormat: 'YYYY',
      }
    );

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
  }

  onContinue(): void {
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

  ngOnInit(): void {}
}
