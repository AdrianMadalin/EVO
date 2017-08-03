import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ArhitectureComponent} from "./architecture/arhitecture.component";
import {TelekomComponent} from "./telekom/telekom.component";
import {PortofolioRouting} from "./portofolio.routing";

@NgModule({
    declarations: [
        ArhitectureComponent,
        TelekomComponent
    ],
    imports: [
        CommonModule,
        PortofolioRouting
    ]
})

export class PortofolioModule {

}
