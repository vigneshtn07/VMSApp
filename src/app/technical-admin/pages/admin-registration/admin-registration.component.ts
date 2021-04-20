import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  ProgressBreadCumb,
  ProgressMove,
} from 'src/app/shared/interface/progress-breadcrumb';
@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class TAdminRegistrationComponent implements OnInit {

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

  ngOnInit(): void { }

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

  assignUser(): void { }

  @Input() src: any;
  public message = "";

  aemail = "test@gmail.com";
  asubject = "Approval email";
  acontent = "Hi < Customer first name>," + "%0D" + "%0D" +
    "We are happy to inform you that, you have been approved and your account is ready for action. Please log in with your" + "%0D" +
    "registered username and password to activate your account." + "%0D" + "%0D" +
    "For any assistance please contact us at <support.ivms@kontaak.com>" + "%0D" + "%0D" +
    "Welcome to iVMS" + "%0D" +
    "iVMS Team";


  remail = "test@gmail.com";
  rsubject = "Your application can been cancelled.";
  rcontent = "Hi < Customer first name>," + "%0D" + "%0D" +
    "Thank you for your interest in iVMS." + "%0D" +
    "We are sorry to inform you that your application did not meet the minimum qualification criteria required for our " + "%0D" +
    "approval process as listed below." + "%0D" + "%0D" +
    "[checklist]" + "%0D" + "%0D" +
    "Our process is designed to ensure the safety and integrity of all our users and aims to provide them unparalleled user" + "%0D" +
    "experience. Please feel free to contact our support team at <support.ivms@kontaak.com> to help you walk through our " + "%0D" +
    "registration process and identify potential glitches in your application." + "%0D" + "%0D" +
    "Best Regards" + "%0D" +
    "iVMS Team";


  onProgressChange($event: string) {
    this.message = $event;
    if (this.message == "Approve") {
      window.location.href = "mailto:" + this.aemail + "?subject=" + this.asubject + "&body=" + this.acontent;
    }
    if (this.message == "Reject") {
      window.location.href = "mailto:" + this.remail + "?subject=" + this.rsubject + "&body=" + this.rcontent;
    }
  }

  showApprovalPrompt(event: any, modalId: TemplateRef<any>): void {
    if (event.currentTarget.checked) {
      this.openModal(modalId);
    }
  }
}
