import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vms-email',
  templateUrl: './vms-email.component.html',
  styleUrls: ['./vms-email.component.scss']
})
export class VmsEmailComponent implements OnInit {


  
  constructor() { }

  email="test@gmail.com";
  subject="Your application can been cancelled";
  content="Dear < Customer first name>," + "%0D" + "%0D" +
  "Thank you for your interest in iVMS." + "%0D" + "%0D" +
  "We are sorry to inform you that your application did not meet the minimum qualification criteria required for our"+ "%0D" +
  "approval process as listed below." + "%0D" +  "%0D" +
  "Our process is designed to ensure the safety and integrity of all our users and aims to provide them unparalleled user"+ "%0D" + "experience. Please feel free to contact our support team at support.ivms@kontaak.com to help you walk through our "+
  "%0D" + "registration process and identify potential glitches in your application." + "%0D" + "%0D" +
  "Best Regards," + "%0D" +
  "iVMS Team";


  aemail="test@gmail.com";
  asubject="Approval email";
  acontent="Hi < Customer first name>," + "%0D" + "%0D" +
  "We are happy to inform you that, you have been approved and your account is ready for action. Please log in with your" + "%0D" +
  "registered username and password to activate your account."+ "%0D" + "%0D" +
  "For any assistance please contact us at <support.ivms@kontaak.com>" + "%0D" +  "%0D" +
  "Welcome to iVMS" + "%0D" +
  "iVMS Team";

  reqemail="test@gmail.com";
  reqsubject="Request for additional information";
  reqcontent="Hi < Customer first name>," + "%0D" + "%0D" +
  "Your application is being reviewed and we observed that we require a few additional information from you to complete"+ "%0D" +
  "our approval process." + "%0D" +  "%0D" +
  "Please click on the link below to submit addition information."+ "%0D" + 
  "< Additional info page>  "+ "%0D" + 
  "If you did not register on iVMS, please ignore this email." + "%0D" + "%0D" +
  "Best Regards," + "%0D" +
  "iVMS Team";


  revemail="test@gmail.com";
  revsubject="Additional information received for < Reg Id>";
  revcontent="Hi < User name>," + "%0D" + "%0D" +
  "The customer of <Reg Id> has submitted the additional information requested by you. Please take actions to verify the" + "%0D" +
  "details and continue the approval process."+ "%0D" + "%0D" +
  "Best Regards," + "%0D" +
  "iVMS Team";

  ngOnInit(): void {
  }

}
