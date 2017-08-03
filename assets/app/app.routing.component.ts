import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from "./not-found/page-not-found.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portofolio/:branch', loadChildren: './portofolio/portofolio.module#PortofolioModule' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
]

export const routing = RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules });
