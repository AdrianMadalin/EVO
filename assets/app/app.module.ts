import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {UploadComponent} from './upload/upload.component';
import {PageNotFoundComponent} from './not-found/page-not-found.component';
import {routing} from './app.routing.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {PortofolioModule} from "./portofolio/portofolio.module";
import {ContactService} from "./contact/contact.service";
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { AgmCoreModule } from '@agm/core';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        HeaderComponent,
        HomeComponent,
        DropdownDirective,
        UploadComponent,
        PageNotFoundComponent,
        TeamComponent,
        FileSelectDirective,
        FileDropDirective,
        FooterComponent,
        FileSelectDirective,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        PortofolioModule,
        HttpModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDTxJ9g-AO_TJravj39La0C8liG_MWL4Hc'
        })
    ],
    providers: [ContactService],
    bootstrap: [AppComponent]
})

export class AppModule {

}
