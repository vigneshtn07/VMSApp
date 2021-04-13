import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vms-grid-catergory-selection',
  templateUrl: './vms-grid-catergory-selection.component.html',
  styleUrls: ['./vms-grid-catergory-selection.component.scss'],
})
export class VmsGridCatergorySelectionComponent implements OnInit {
  options: any;
  selectedOption: any;

  constructor() {
    this.options = [
      { name: 'All', code: 'All' },
      { name: 'My Record', code: 'My Record' },
      { name: 'New', code: 'New' },
      { name: 'Approved', code: 'Approved' },
      { name: 'Rejected', code: 'Rejected' },
      { name: 'In Progress', code: 'In Progress' },
      { name: 'Need Info', code: 'Need Info' },
    ];
  }

  ngOnInit(): void {}
}
