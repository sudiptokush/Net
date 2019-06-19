import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  deny() {
    // this
    //   .router
    //   .navigate(['deny'], { queryParamsHandling: 'preserve' });

    this
      .router
      .navigate(['deny']);
  }
  unsubscribe() {
    // this
    //   .router
    //   .navigate(['confirm'], { queryParamsHandling: 'preserve' });

    this
      .router
      .navigate(['confirm']);
  }
}
