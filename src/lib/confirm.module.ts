import { ButtonsModule }    from '@angular.studio/buttons';
import { DialogModule }     from '@angular.studio/dialog';
import { NgModule }         from '@angular/core';
import { ConfirmComponent } from './confirm.component';

@NgModule({

    declarations: [ ConfirmComponent ],
    imports: [

        ButtonsModule,
        DialogModule

    ],
    exports: [ ConfirmComponent ],
    entryComponents: [ ConfirmComponent ]

})
export class ConfirmModule {
}
