import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-vms-notification',
  templateUrl: './vms-notification.component.html',
  styleUrls: ['./vms-notification.component.scss']
})
export class VmsNotificationComponent implements OnInit {
  isCollapsed: boolean = true;
  isshow :boolean|any;

  toggle = true;
  status = 'Enable'; 

 // @Output() modalShow = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  loadMenu(isshow : boolean): void {
    if(isshow){
    document.querySelectorAll('.button').forEach(item => {
      item.classList.add('active');
     });
     document.querySelectorAll('main').forEach(item => {
      item.classList.add('move-to-left');
     });
     document.querySelectorAll('.sidebar-item').forEach(item => {
      item.classList.add('active');
     });
   // this.modalShow.emit(isshow);
    }
    else
    {
      document.querySelectorAll('.button').forEach(item => {
        item.classList.remove('active');
       });
       document.querySelectorAll('main').forEach(item => {
        item.classList.remove('move-to-left');
       });
       document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
       });
     // this.modalShow.emit(isshow);
    }
  }

  getColor() {  
    this.toggle = !this.toggle;
    if(!this.toggle)
    {
       return 'white';
    }
    else{
      return '#d8020f';
    }
  }

  
}
