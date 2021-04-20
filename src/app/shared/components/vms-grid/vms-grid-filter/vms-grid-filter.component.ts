import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vms-grid-filter',
  templateUrl: './vms-grid-filter.component.html',
  styleUrls: ['./vms-grid-filter.component.scss'],
})
export class VmsGridFilterComponent implements OnInit {
  dropdownList: any;
  dropdownSelectedItems: any;
  dropdownSettings = {};

  accountTypeDropDown: any;
  accountTypeDropDownSelection: any;
  statusDropDown: any;
  statusDropDownSelection: any;
  dateRangeDropDown: any;
  dateRangeDropDownSelection: any;
  assignedToDropDown: any;
  assignedToDropDownSelection: any;
  regIdsDropDown: any;
  regIdsDropDownSelection: any;

  constructor() {}

  ngOnInit(): void {
    this.accountTypeDropDown = [
      { item_id: 1, item_text: 'Skill source' },
      { item_id: 2, item_text: 'Specialist' },
      { item_id: 3, item_text: 'Project Owner' },
    ];

    this.statusDropDown = [
      { item_id: 1, item_text: 'New' },
      { item_id: 2, item_text: 'In progress' },
      { item_id: 3, item_text: 'Approved' },
      { item_id: 4, item_text: 'Rejected' },
      { item_id: 5, item_text: 'Need info' },
      { item_id: 6, item_text: 'Discontinued' },
    ];

    this.dateRangeDropDown = [
      { item_id: 1, item_text: 'New' },
      { item_id: 2, item_text: 'In progress' },
    ];

    this.assignedToDropDown = [
      { item_id: 1, item_text: 'user 1' },
      { item_id: 2, item_text: 'user 2' },
    ];

    this.regIdsDropDown = [
      { item_id: 1, item_text: 'PO00214' },
      { item_id: 2, item_text: 'PO00256' },
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

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
