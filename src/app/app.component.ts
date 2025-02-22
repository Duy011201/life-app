import { Component } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ActivationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { LoadingComponent } from './core/component/loading/loading.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { HeaderComponent } from './core/component/header/header.component';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoadingComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  /*
   * Default value for comp header and comp footer
   */
  public showHeader: boolean = false;
  public showFooter: boolean = false;

  /*
   * Get value from router
   */
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof ActivationEnd),
        map((event) => (<ActivationEnd>event).snapshot),
        map((snapshot) => (<ActivatedRouteSnapshot>snapshot).data)
      )
      .subscribe((data) => {
        const dataRouter = Object.assign({}, data);
        if (Object.keys(dataRouter).length > 0) {
          this.showHeader = !!dataRouter?.['showHeader'];
          this.showFooter = !!dataRouter?.['showFooter'];
        }
      });
  }

  ngOnInit(): void {}
}
