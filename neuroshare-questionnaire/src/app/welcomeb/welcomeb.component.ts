import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { IbukiService } from '../ibuki.service';
@Component({
  selector: 'app-welcomeb',
  templateUrl: './welcomeb.component.html',
  styleUrls: ['./welcomeb.component.scss']
})
export class WelcomebComponent implements OnInit {
  data: any = {};
  constructor(public appService: AppService, private ibukiService: IbukiService, private router: Router) { }

  ngOnInit() {
    const x = this.appService.get('qx') || this.ibukiService.behFilterOn('getPatientDetails').subscribe(d => {
      this.appService.set('qx', d.data); // All data against qx_code is saved in global variable property 'qx'
      this.data = this.appService.getWelcomeData();
      const y = x && x.unsubscribe();
    });
    this.data = this.appService.getWelcomeData();
  }
  next() {
    let landingPage = this.appService.get('landingPage');
    landingPage || (landingPage = 'q1a');
    (landingPage === 'review')
      ? this.router.navigate(['review'], { queryParamsHandling: 'preserve' })
      :  this.router.navigate(['generic1', landingPage], { queryParamsHandling: 'preserve' });
    // this.router.navigate(['generic1', 'q1a']);
  }
}
