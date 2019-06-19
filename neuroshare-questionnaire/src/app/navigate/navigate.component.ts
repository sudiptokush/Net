import { Component, OnInit, Input } from '@angular/core';
import { navMap, sutterHealthUrl } from '../app.config';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
// import * as _ from 'lodash';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
import { IbukiService } from '../ibuki.service';
import { filter } from 'rxjs/operators';
// import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})

export class NavigateComponent implements OnInit {
  @Input() selectedOption: any;
  @Input() pageName: string;
  pageObject: any;
  responses: any;
  lastAnsweredPage: any;
  firstEmptyPage: any;
  pagesVisited: any;
  constructor(private appService: AppService, private router: Router,
    private location: Location, public dialog: MatDialog, private ibukiService: IbukiService) { }

  ngOnInit() {
    const qx = this.appService.get('qx');
    this.responses = qx && JSON.parse(qx.responses);
    (this.responses) || (this.responses = []);
    this.pagesVisited = this.appService.get('pagesVisited');
    (this.pagesVisited) && (Array.isArray(this.pagesVisited)) || (this.pagesVisited = []);
  }

  next() {
    this.pageObject = navMap[this.pageName];
    let jumpTo;
    if (this.pageObject.type === 'selectOptions') {
      jumpTo = ((this.pageObject.sub[0].value)
        && (this.pageObject.sub[1].value)
        && (this.pageObject.sub[2].value)
        && (this.pageObject.sub[3].value)) ? (jumpTo = this.pageObject.sub[0].jumpTo) : (jumpTo = this.pageObject.jumpTo);
    } else {
      ((this.pageObject.answer) && (this.pageObject.answer.jumpTo)
        && (jumpTo = this.pageObject.answer.jumpTo)) || (jumpTo = this.pageObject.jumpTo);
    }
    (jumpTo === 'review') || (
      navMap[jumpTo].jumpBack = this.pageName
    );
    this.saveData(this.pageObject);
    (jumpTo === 'review')
      ? this.router.navigate(['review'], { queryParamsHandling: 'preserve' })
      : this.router.navigate(['generic1', jumpTo], { queryParamsHandling: 'preserve' });
  }
  getPagesVisited = (obj) => {
    this.pagesVisited = this.appService.get('pagesVisited');
    const pageObj: any = {};
    pageObj.pageName = this.pageName;
    pageObj.isAnswered = this.appService.checkPageEmptyOrNot(obj);
    const element = this.pagesVisited.filter(item => item.pageName === this.pageName);
    ((element.length === 0) && this.pagesVisited.push(pageObj)) || (element[0].isAnswered = pageObj.isAnswered);
    this.appService.set('pagesVisited', this.pagesVisited);
  }
  previous() {
    this.pageObject = navMap[this.pageName];
    const jumpBack = this.pageObject.jumpBack;
    this.pagesVisited = this.appService.get('pagesVisited');
    (jumpBack === 'start') || this.pagesVisited.pop();
    this.appService.set('pagesVisited', this.pagesVisited);
    (jumpBack === 'start') || (this.router
      .navigate(['generic1', jumpBack], { queryParamsHandling: 'preserve' }));

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '350px',
      data: {
        header: '',
        pageContent: `Your answers have been saved and will be shared with your clinician. To continue the questionnaire,
      use the hyperlink in the email invitation.`,
        button1: 'Close',
        button2: 'Continue'
      }
    });
    this.pageObject = navMap[this.pageName];
    this.saveData(this.pageObject);
    // const qx = this.appService.get('qx');
    // const carryBag = JSON.stringify({
    //   'pages_visited': this.pagesVisited
    // });
    // qx && (qx.carry_bag = carryBag);
    // this.ibukiService.httpPost('postPatientData', this.appService.getPostData());
    dialogRef.afterClosed().subscribe(result => {
      if (result === '0') {
        window.location.href = sutterHealthUrl;
      }
    });
  }

  saveData(obj) {
    this.getPagesVisited(obj);
    const sub = obj.sub;
    const qx = this.appService.get('qx');
    switch (obj.type) {
      case 'radio':
      case 'scale':
        this.prepareRadioQx(obj);
        break;
      case 'table':
      case 'header':
        sub && sub.forEach(element => {
          this.prepareTableQx(element);
        });
        break;
      case 'division':
        sub && sub.forEach(element => {
          this.prepareRadioQx(element);
        });
        break;
      case 'selectOptions':
        sub && sub.forEach(element => {
          this.prepareSelectOptionQx(element, obj.selectOptions);
        });
        break;
      case 'sub2':
        sub && sub.forEach(element => {
          this.prepareTableQx(element);
        });
        (obj.sub2) && obj.sub2.forEach(element => {
          this.prepareRadioQx(element);
        });
        break;
      case 'gender':
        this.prepareRadioQx(obj);
        if (qx.gender && (qx.gender === 'male')) {
          obj && (obj.male) && (obj.male.sub) && obj.male.sub.forEach(element => {
            this.prepareTableQx(element);
          });
        } else if (qx.gender && (qx.gender === 'female')) {
          obj && (obj.female) && (obj.female.sub) && obj.female.sub.forEach(element => {
            this.prepareTableQx(element);
          });
        }
        break;
      case 'patientConcerns':
        this.preparePatientConcerns(obj);
        break;
      case 'relapses':
        (obj.sub3) && obj.sub3.forEach(element => {
          this.prepareRadioQx(element);
        });
        (obj.sub2) && this.prepareRelapce1(obj.sub2);
        (obj.sub2) && (obj.sub1) && this.prepareRelapce2(obj.sub1, obj.sub2.answer);
        break;
    }
    qx.status = 'started';
    qx.responses = JSON.stringify(this.responses);
    const qxTemp = this.appService.get('qx');
    // console.log(qxTemp);
    this.ibukiService.httpPost('postPatientData', this.appService.getPostData());
  }

  prepareRelapce1 = (qxObj) => {
    const filter1: any = this.responses.filter(item => item.qx_code === qxObj.name);
    if (filter1.length === 1) {
      filter1[0].answer_text = qxObj.answer;
    } else {
      const temp: any = {};
      temp.qx_code = qxObj.name;
      temp.qx_text = qxObj.text;
      temp.answer_options = (qxObj.selectOption);
      temp.answer_text = qxObj.answer;
      temp.qx_global_text = '';
      temp.edss = qxObj.edss || 'no';
      this.responses.push(temp);
    }
  }

  prepareRelapce2 = (qxObj, value) => {
    const answer_text = [];
    if (value) {
      for (let i = 0; i < value; i++) {
        let answer = '';
        answer = (qxObj.relapsesYear[i]) ? qxObj.relapsesYear[i] : '';
        answer = answer + '^' + ((qxObj.relapsesMonth[i]) ? qxObj.relapsesMonth[i] : '');
        answer_text.push(answer);
      }
    }
    const filter1: any = this.responses.filter(item => item.qx_code === qxObj.name);
    if (filter1.length === 1) {
      filter1[0].answer_text = answer_text;
    } else {
      const temp: any = {};
      temp.qx_code = qxObj.name;
      temp.qx_text = qxObj.text;
      temp.answer_options = (qxObj.answer_options);
      temp.answer_text = answer_text;
      temp.qx_global_text = '';
      temp.edss = qxObj.edss || 'no';
      this.responses.push(temp);
    }
  }

  preparePatientConcerns = (qxObj) => {
    const filter1: any = this.responses.filter(item => item.qx_code === qxObj.name);
    if (filter1.length === 1) {
      filter1[0].answer_text = (qxObj.options) && qxObj.options.map(item => {
        return item.checked ? (item.othertext ? '1^' + item.othertext : '1') : '0';
      });
    } else {
      const temp: any = {};
      temp.qx_code = qxObj.name;
      temp.qx_text = qxObj.text;
      temp.answer_options = (qxObj.options) && qxObj.options.map(x => x.text);
      temp.answer_text = qxObj.options.map(item => {
        return item.checked ? (item.othertext ? '1^' + item.othertext : '1') : '0';
      });
      temp.qx_global_text = '';
      temp.edss = qxObj.edss || 'no';
      this.responses.push(temp);
    }
  }

  prepareRadioQx = (qxObj) => {
    const filter1: any = (this.responses) && this.responses.filter(item => item.qx_code === qxObj.name);
    if (filter1 && (filter1.length === 1)) {
      filter1[0].answer_text = (qxObj.answer) && (qxObj.answer.text) && qxObj.answer.text;
      filter1[0].answer_text_score = ((qxObj.answer) && (qxObj.answer.score) && qxObj.answer.score) || '';
    } else {
      const temp: any = {};
      temp.qx_code = qxObj.name;
      temp.qx_text = qxObj.text;
      temp.answer_options = (qxObj.options) && qxObj.options.map(x => x.text);
      temp.answer_options_score = (qxObj.options) && qxObj.options.map(x => x.score || 0);
      temp.answer_text = (qxObj.answer) && (qxObj.answer.text) && qxObj.answer.text;
      temp.answer_text_score = ((qxObj.answer) && (qxObj.answer.score) && qxObj.answer.score) || 0;
      temp.qx_global_text = '';
      temp.edss = qxObj.edss || 'yes';
      this.responses.push(temp);
    }
  }

  prepareTableQx = (qxObj) => {
    const filter1: any = (this.responses) && this.responses.filter(item => item.qx_code === qxObj.name);
    if (filter1 && (filter1.length === 1)) {
      if (qxObj.options.filter(item => item.checked).length > 0) {
        filter1[0].answer_text = qxObj.options.filter(item => item.checked)[0].text;
        filter1[0].answer_text_score = qxObj.options.filter(item => item.checked)[0].score;
      } else {
        filter1[0].answer_text = '';
        filter1[0].answer_text_score = 0;
      }
    } else {
      const temp: any = {};
      temp.qx_code = qxObj.name;
      temp.qx_text = qxObj.text;
      temp.answer_options = (qxObj.options) && qxObj.options.map(item => item.text);
      temp.answer_options_score = (qxObj.options) && qxObj.options.map(x => x.score || 0);
      if (qxObj.options.filter(item => item.checked).length > 0) {
        temp.answer_text = qxObj.options.filter(item => item.checked)[0].text;
        temp.answer_text_score = qxObj.options.filter(item => item.checked)[0].score;
      } else {
        temp.answer_text = '';
        temp.answer_text_score = 0;
      }
      temp.qx_global_text = '';
      temp.edss = qxObj.edss || 'yes';
      this.responses.push(temp);
    }
  }

  prepareSelectOptionQx = (qxObj, selectOptions) => {
    const filter1: any = (this.responses) && this.responses.filter(item => item.qx_code === qxObj.name);
    if (filter1 && (filter1.length === 1)) {
      filter1[0].answer_text = qxObj.value;
    } else {
      const temp: any = {};
      temp.qx_code = qxObj.name;
      temp.qx_text = qxObj.text;
      temp.answer_options = selectOptions;
      temp.answer_options_score = [];
      temp.answer_text = qxObj.value;
      temp.qx_global_text = '';
      temp.edss = qxObj.edss || 'no';
      this.responses.push(temp);
    }
  }

  getJumpTo = (obj) => {
    let jumpTo: any;
    if (obj.type === 'selectOptions') {
      jumpTo = ((obj.sub[0].value)
        && (obj.sub[1].value)
        && (obj.sub[2].value)
        && (obj.sub[3].value)) ? (jumpTo = obj.sub[0].jumpTo) : (jumpTo = obj.jumpTo);
    } else {
      ((obj.answer) && (obj.answer.jumpTo)
        && (jumpTo = obj.answer.jumpTo)) || (jumpTo = obj.jumpTo);
    }
    return jumpTo;
  }

  getLastAnsweredPage = (lastAnsweredPage, obj) => {
    const isAnswered = this.appService.checkPageEmptyOrNot(obj);
    return isAnswered ? (
      (lastAnsweredPage) ? ((obj.weight > navMap[lastAnsweredPage].weight ? this.pageName : lastAnsweredPage)) : this.pageName
    ) : lastAnsweredPage;
  }
}
