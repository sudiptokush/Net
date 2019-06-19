import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { IbukiService } from './ibuki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'neuroshare-questionnaire';
  sub: any = {};
  constructor(private appService: AppService, private ibukiService: IbukiService, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.ibukiService.behFilterOn('getPatientDetails').subscribe(d => {
      this.appService.set('qx', d.data); // All data is saved in global variable property 'qx'
      const welcomePage = this.getWelcomePage();
      this.appService.set('welcomePage', welcomePage);
      if (welcomePage === 'welcomeb') { this.appService.populateNavMap(); }
      this.appService.get('toNavigate') &&
        this.router.navigate([welcomePage], { queryParams: { qx_code: this.appService.get('qx_code') } });
    });
    this.appService.initialize();
  }

  isWithin90Days(dt) {
    let ret = false;
    const today = moment();
    if (dt) {
      const thatDate = moment(dt);
      const diff = today.diff(thatDate, 'days');
      (diff <= 90) ? ret = true : ret = false;
    }
    return (ret);
  }

  getWelcomePage() {
    const qx = this.appService.get('qx');
    const completedDate = qx && qx.qx_completed_at;
    const isCompletedWithin90Days = this.isWithin90Days(completedDate);
    const status = (qx && qx.status); // || 'none';
    let welcomePage = '';
    if (isCompletedWithin90Days) {
      welcomePage = 'welcomec';
    } else {
      if (status === 'started') {
        welcomePage = 'welcomeb';
      } else {
        welcomePage = 'welcomea';
      }
    }
    return (welcomePage);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
