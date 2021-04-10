import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  public show: boolean = false;
  constructor() { }
  tog = true;

  ngOnInit(): void {
    //  document.querySelectorAll('.appbar').forEach(item => {
    //   item.classList.add('act');
    //  });
     document.querySelectorAll('.appbar-item').forEach(item => {
      item.classList.add('act');
     });
  }

openMenu(state: boolean) {
  if(state){
    document.querySelectorAll('.appbar-item').forEach(item => {
      item.classList.add('act');
     });
     document.querySelectorAll('.buttonside').forEach(item => {
      item.classList.add('act');
     });
    //  document.querySelectorAll('main').forEach(item => {
    //   item.classList.remove('move-to-left');
    //  });
    this.show=state;
    }
    else
    {
      document.querySelectorAll('.appbar-item').forEach(item => {
        item.classList.remove('act');
       });
      //  document.querySelectorAll('main').forEach(item => {
      //   item.classList.remove('move-to-left');
      //  });
       document.querySelectorAll('.buttonside').forEach(item => {
        item.classList.remove('act');
       });
       this.show=state;
    }
  }

  
  getColor() {  
    this.tog = !this.tog;
    if(!this.tog)
    {
       return 'white';
    }
    else{
      return '#d8020f';
    }
  }

}
