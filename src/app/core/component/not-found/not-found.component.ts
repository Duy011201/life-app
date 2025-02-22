import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SETTING } from '@app/core/config/setting.config';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  countdown = 15;

  constructor(private router: Router) {}

  ngOnInit() {
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(interval);
        this.router.navigate([SETTING.SYSTEM_PAGE.RELATED_HOME]);
      }
    }, 1000);
  }
}
