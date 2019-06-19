import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
import { IbukiService } from '../ibuki.service';
import { AppService } from '../app.service';
// import { navMap } from '../app.config';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit, OnDestroy {
  data: any = {};
  displaySection: any;
  isSubmitDisabled = true;
  presentResponses: any;
  relapses: any;
  subs: any;
  edssAndSymptoms: any = {};
  constructor(
    private router: Router,
    // private location: Location,
    public dialog: MatDialog,
    private appService: AppService,
    private ibukiService: IbukiService) { }

  ngOnInit() {
    this.subs = this.ibukiService.filterOn('getEdssAndSymptoms').subscribe(d => {
      this.isSubmitDisabled = false;
      this.edssAndSymptoms = d.data;
    });
    this.ibukiService.httpGet('getEdssAndSymptoms', { qx_code: this.appService.get('qx_code') });
    this.data = this.appService.getWelcomeData();
    const welcomePage = this.appService.get('welcomePage');
    this.displaySection = welcomePage && (welcomePage === 'welcomeb' || welcomePage === 'welcomea');
    const temp = this.appService.getPatientConcerns();
    this.presentResponses = temp && temp.filter(x => x);
    this.relapses = this.appService.getRelapses();
  }

  previous() {
    this.router.navigate(['generic1', 'q29'], { queryParamsHandling: 'preserve' });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '350px',
      data: {
        header: '',
        pageContent: 'Are you ready to submit? You will not be able to go back and change your responses.',
        button1: 'Go Back',
        button2: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === '1') {
        this.ibukiService.httpPost('postPatientData', {
          'qx_code': this.appService.get('qx_code')
          , status: 'completed'
        });
        this
          .router
          .navigate(['thankyou']);
      }
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
