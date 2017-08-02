import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ArhitectureComponent} from "./architecture/arhitecture.component";
import {TelekomComponent} from "./telekom/telekom.component";

@NgModule({
    declarations: [
        ArhitectureComponent,
        TelekomComponent
    ],
    imports: [
        CommonModule
    ]
})

export class PortofolioModule {

}