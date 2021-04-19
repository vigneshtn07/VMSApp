import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  modalRef!: BsModalRef;

  currentIndex: any = -1;
  showFlag: any = false;
  selectUserAssignment: string = 'self';

  userListOptions: any;
  selectedUserOption: any;

  registrationCheckList: any;
  exceptionalApproval: boolean = false;

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

  aemail = 'test@gmail.com';
  asubject = 'Approval email';
  acontent =
    'Hi < Customer first name>,' +
    '%0D' +
    '%0D' +
    'We are happy to inform you that, you have been approved and your account is ready for action. Please log in with your' +
    '%0D' +
    'registered username and password to activate your account.' +
    '%0D' +
    '%0D' +
    'For any assistance please contact us at <support.ivms@kontaak.com>' +
    '%0D' +
    '%0D' +
    'Welcome to iVMS' +
    '%0D' +
    'iVMS Team';

  constructor(private modalService: BsModalService) {
    this.userListOptions = [
      { user: 'Karthick', code: 'karthick' },
      { user: 'Sabari', code: 'sabari' },
      { user: 'Vijay', code: 'Vijay' },
      { user: 'Harish', code: 'Harish' },
    ];

    this.registrationCheckList = [
      { label: 'Checkitem1', checked: false },
      { label: 'Checkitem2', checked: false },
      { label: 'Checkitem3', checked: false },
      { label: 'Checkitem4', checked: false },
      { label: 'Checkitem5', checked: false },
      { label: 'Checkitem6', checked: false },
      { label: 'Checkitem7', checked: false },
      { label: 'Checkitem8', checked: false },
      { label: 'Checkitem9', checked: false },
      { label: 'Checkitem10', checked: false },
    ];
  }

  ngOnInit(): void {}

  showImagePreviewer(index: number) {
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

  showApprovalPrompt(event: any, modalId: TemplateRef<any>): void {
    if (event.currentTarget.checked) {
      this.openModal(modalId);
    }
  }
  sendApprovalNofitication(): void {}

  assignUser(): void {}
}
