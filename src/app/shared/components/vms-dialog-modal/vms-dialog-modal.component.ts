import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-vms-dialog-modal',
  templateUrl: './vms-dialog-modal.component.html',
  styleUrls: ['./vms-dialog-modal.component.scss']
})
export class VMSDialogModalComponent implements OnInit {
  title: string = '';
  closeBtnName: string = '';
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
