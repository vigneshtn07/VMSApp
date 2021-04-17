import { Component, Input, OnInit } from '@angular/core';
import { GridHeader } from '../../interface/grid-header';
// import * as _ from 'lodash';

@Component({
  selector: 'vms-grid',
  templateUrl: './vms-grid.component.html',
  styleUrls: ['./vms-grid.component.scss'],
})
export class VmsGridComponent implements OnInit {
  @Input() columns!: GridHeader[];
  @Input() values!: any;
  @Input() categorySelection: string;

  constructor() {
    this.categorySelection = 'name';
  }

  ngOnInit() {
  //  this.values = _.orderBy(this.values, [this.categorySelection], ['asc']);
  }
}
