import { Component, EventEmitter,Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'stacked-progress-bar',
  templateUrl: './stacked-progress-bar.component.html',
  styleUrls: ['./stacked-progress-bar.component.scss'],
})
export class StackedProgressBarComponent implements OnInit {
  @Input('parentData') public name: any;
  @Output() handleProgressClick = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  Approve() {
    this.handleProgressClick.emit('Approve');
  }
  Reject() {
    this.handleProgressClick.emit('Reject');
  }
}
