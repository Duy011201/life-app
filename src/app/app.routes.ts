import { Routes } from '@angular/router';
import { HomeComponent } from './main/page/home/home.component';
import { NotFoundComponent } from './core/component/not-found/not-found.component';
import { SETTING } from './core/config/setting.config';

export const routes: Routes = [
  {
    path: SETTING.SYSTEM_PAGE.RELATED_ROOT,
    redirectTo: SETTING.SYSTEM_PAGE.RELATED_HOME,
    pathMatch: 'full',
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_HOME,
    component: HomeComponent,
    data: { showHeader: true, showFooter: true },
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_AUTH,
    loadChildren: () => import('./main/page/auth/auth.module').then((m) => m.AuthModule),
    data: { showHeader: false, showFooter: false },
  },
  {
    path: SETTING.SYSTEM_PAGE.RELATED_NOT_FOUND,
    component: NotFoundComponent,
    data: { showHeader: true, showFooter: true },
  },
];
