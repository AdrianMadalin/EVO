import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ArhitectureComponent} from "./portofolio/architecture/arhitecture.component";
import {TelekomComponent} from "./portofolio/telekom/telekom.component";
import {UploadComponent} from "./upload/upload.component";
import {PageNotFoundComponent} from "./not-found/page-not-found.component";

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    // {path: 'home', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'portofoliu/arhitectura', component: ArhitectureComponent},
    {path: 'portofoliu/telekom', component: TelekomComponent},
    {path: 'portofoliu/upload/evo', component: UploadComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: 'not-found'},
]

export const routing = RouterModule.forRoot(APP_ROUTES);
