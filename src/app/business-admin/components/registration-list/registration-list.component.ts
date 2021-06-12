import { Component, OnInit } from '@angular/core';
import { SampleRegistrationList } from '../../constants/mock-data';
import { RegistrationList } from '../../interface/registration-list';
import { GridHeader } from '../../../shared/interface/grid-header';
import { CommonService } from 'src/app/services/common.service';
import { } from 'src/app/interface/index';
import { viewregisteredusers, allRegistredusers } from 'src/app/interface/index';
import * as moment from 'moment';
@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {
  public cols!: GridHeader[];
  public registrationlist!: viewregisteredusers[];
  obj!: allRegistredusers;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.cols = [
      {
        field: 'userId',
        header: 'Reg. Id',
        colWidth: '120px',
        type: 'link',
      },
      { field: 'username', header: 'Name', colWidth: '200px', type: 'text' },
      {
        field: 'accountType',
        header: 'Account Type',
        colWidth: '200px',
        type: 'text',
      },
      {
        field: 'date',
        header: 'Submitted Date',
        colWidth: '200px',
        type: 'date',

      },
      // {
      //   field: 'contactName',
      //   header: 'Contact Name',
      //   colWidth: '200px',
      //   type: 'text',
      // },
      { field: 'status', header: 'Status', colWidth: '200px', type: 'text' },
      // {
      //   field: 'assingedTo',
      //   header: 'Assinged To',
      //   colWidth: '200px',
      //   type: 'text',
      // },
      // {
      //   field: 'assignedDate',
      //   header: 'Assigned Date',
      //   colWidth: '200px',
      //   type: 'text',
      // },
      // {
      //   field: 'approvalOrRejectionDate',
      //   header: 'Approval/Rejection Date',
      //   colWidth: '250px',
      //   type: 'text',
      // },
      // {
      //   field: 'approvalOrRejectionBy',
      //   header: 'Approval/Rejection By',
      //   colWidth: '250px',
      //   type: 'text',
      // },
    ];

    //this.registrationlist = SampleRegistrationList;

    this.commonService.viewAllUsers().subscribe(
      (response) => {
        this.registrationlist = response;
        // for (let obj in this.registrationlist) {
        //   this.obj.date = moment(this.obj.date).format('DD/MM/YYYY').toString();
        //   //this.registrationlist.
        // }
        // this.registrationlistthis.obj;
        // this.registrationlist.mess="";
        // for(var i in this.registrationlist){
        //   this.registrationlist[i].users.date = new Date(this.registrationlist[i].users.date);
        // };
      },
      (error) => {
        // this.appLoadingService.setLoaderState(false);
        // this.notifier.show({
        //     type: 'info',
        //     message: error.error,
        // });
      }
    );


  }

}
