import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  ProgressBreadCumb,
  ProgressMove,
} from 'src/app/shared/interface/progress-breadcrumb';

@Component({
  selector: 'app-badmin-registration',
  templateUrl: './badmin-registration.component.html',
  styleUrls: ['./badmin-registration.component.scss']
})
export class BadminRegistrationComponent implements OnInit {

  submittedDate: any;
  lastModifiedDate: any;
  assignedDate: any;
  approvedOrRejectedDate: any;
  bsConfig!: Partial<BsDatepickerConfig>;
  modalRef!: BsModalRef;

  currentIndex: any = -1;
  showFlag: any = false;
  selectUserAssignment: string = 'self';

  userListOptions: any;
  selectedUserOption: any;

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

  constructor(private modalService: BsModalService) {
    this.userListOptions = [
      { user: 'Karthick', code: 'karthick' },
      { user: 'Sabari', code: 'sabari' },
      { user: 'Vijay', code: 'Vijay' },
      { user: 'Harish', code: 'Harish' },
    ];
  }

  ngOnInit(): void {}

  showLightbox(index: number) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

  openModal(modalId: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalId);
  }

  assignUser(): void {}
}
