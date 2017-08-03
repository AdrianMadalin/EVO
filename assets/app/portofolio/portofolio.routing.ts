import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {ArhitectureComponent} from "./architecture/arhitecture.component";
import {TelekomComponent} from "./telekom/telekom.component";
import {UploadComponent} from "../upload/upload.component";

const PORTOFOLIO_ROUTES: Routes = [
  { path: 'portofoliu/arhitectura', component: ArhitectureComponent },
  { path: 'portofoliu/telekom', component: TelekomComponent },
  { path: 'portofoliu/upload/evo', component: UploadComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(PORTOFOLIO_ROUTES)
  ],
  exports :[
    RouterModule
  ]
})

export class PortofolioRouting {

}
