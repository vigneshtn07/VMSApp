import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {
  ProgressBreadCumb,
  ProgressMove,
} from 'src/app/shared/interface/progress-breadcrumb';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss'],
})
export class AdminRegistrationComponent implements OnInit {
  submittedDate: any;
  lastModifiedDate: any;
  assignedDate: any;
  approvedOrRejectedDate: any;
  bsConfig!: Partial<BsDatepickerConfig>;

  currentIndex: any = -1;
  showFlag: any = false;

  imageObject: Array<any> = [
    {
      image: '../../../../assets/images/attachment-1.png',
      thumbImage: '../../../../assets/images/attachment-1.png',
      title: 'attachment-1',
    },
    {
      image: '../../../../assets/images/attachment-2.png',
      thumbImage: '../../../../assets/images/attachment-2.png',
      title: 'attachment-2',
    },
    {
      image: '../../../../assets/images/attachment-3.png',
      thumbImage: '../../../../assets/images/attachment-3.png',
      title: 'attachment-3',
    },
    {
      image: '../../../../assets/images/attachment-4.png',
      thumbImage: '../../../../assets/images/attachment-4.png',
      title: 'attachment-4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showLightbox(index: number) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }
}
