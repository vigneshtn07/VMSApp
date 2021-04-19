import { Component, OnInit } from '@angular/core';
import { GridHeader } from 'src/app/shared/interface/grid-header';
import { SampleProjectList } from '../../constants/mock-data-projects';
import { Project } from '../../interface/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  public cols!: GridHeader[];
  public projectList!: Project[];
  constructor() {
    this.cols = [
      {
        field: 'projectId',
        header: 'Project ID',
        colWidth: '150px',
        type: 'text',
      },
      {
        field: 'projectOwner',
        header: 'Project Owner',
        colWidth: '200px',
        type: 'text',
      },
      {
        field: 'submittedOn',
        header: 'Submitted On',
        colWidth: '200px',
        type: 'text',
      },
      {
        field: 'contactName',
        header: 'Contact Name',
        colWidth: '200px',
        type: 'text',
      },
      {
        field: 'status',
        header: 'Status',
        colWidth: '200px',
        type: 'link',
      },
      {
        field: 'assignedTo',
        header: 'Assigned To',
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
        field: 'approvedOrRejectedOn',
        header: 'Approval/Rejection Date',
        colWidth: '250px',
        type: 'text',
      },
      {
        field: 'approvedOrRejectedBy',
        header: 'Approval/Rejection By',
        colWidth: '250px',
        type: 'text',
      },
    ];
  }

  ngOnInit(): void {
    this.projectList = SampleProjectList;
  }
}
