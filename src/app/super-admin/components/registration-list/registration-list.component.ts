import { Component, OnInit } from '@angular/core';
import { SampleRegistrationList } from '../../constants/mock-data-registrations';
import { RegistrationList } from '../../interface/registration-list';
import { GridHeader } from '../../../shared/interface/grid-header';

@Component({
  selector: 'sa-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss'],
})
export class RegistrationListComponent implements OnInit {
  public cols!: GridHeader[];
  public registrationlist!: RegistrationList[];
  private myChanges: any;
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {
        field: 'registrationId',
        header: 'Reg. Id',
        colWidth: '120px',
        type: 'text',
      },
      { field: 'name', header: 'Name', colWidth: '200px', type: 'text' },
      {
        field: 'accountType',
        header: 'Account Type',
        colWidth: '200px',
        type: 'text',
      },
      {
        field: 'submittedDate',
        header: 'Submitted Date',
        colWidth: '200px',
        type: 'text',
      },
      {
        field: 'contactName',
        header: 'Contact Name',
        colWidth: '200px',
        type: 'text',
      },
      { field: 'status', header: 'Status', colWidth: '200px', type: 'link' },
      {
        field: 'assingedTo',
        header: 'Assinged To',
        colWidth: '200px',
        type: 'text',
      },
      {
        field: 'assignedDate',
        header: 'Assigned Date',
        colWidth: '200px',
        type: 'text',
      },
      {
        field: 'approvalOrRejectionDate',
        header: 'Approval/Rejection Date',
        colWidth: '250px',
        type: 'text',
      },
      {
        field: 'approvalOrRejectionBy',
        header: 'Approval/Rejection By',
        colWidth: '250px',
        type: 'text',
      },
    ];

    this.registrationlist = SampleRegistrationList;
  }
}
