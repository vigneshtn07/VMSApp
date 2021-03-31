import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-signup-phase-four',
  templateUrl: './signup-phase-four.component.html',
  styleUrls: ['./signup-phase-four.component.scss'],
})
export class SignupPhaseFourComponent implements OnInit {
  @Output() wizardStepEmitter: EventEmitter<number> = new EventEmitter();
  @ViewChild(SignaturePad)
  signaturePad!: SignaturePad;
  private readonly notifier!: NotifierService;

  signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 2,
    // canvasWidth: 500,
    // canvasHeight: 300,
  };
  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  navigateBack(): void {
    this.wizardStepEmitter.next(3);
  }

  onSubmit(): void {
    this.wizardStepEmitter.next(5);
    this.notifier.show({
      type: 'Signin successful',
      message: 'You will receive a confirmation email shortly!',
    });
  }
}
