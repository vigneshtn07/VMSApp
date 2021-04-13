import { Component, Input, OnInit } from '@angular/core';
import { GridHeader } from 'src/app/shared/interface/grid-header';

@Component({
  selector: 'vms-grid-table',
  templateUrl: './vms-grid-table.component.html',
  styleUrls: ['./vms-grid-table.component.scss'],
})
export class VmsGridTableComponent implements OnInit {
  @Input() columns!: GridHeader[];
  @Input() values!: any;
  constructor() {}

  ngOnInit(): void {}
}
