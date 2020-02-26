import { Component, Input } from '@angular/core';
import { Confirm }          from './confirm';

@Component({

    selector: 'confirm',
    template: `

        <div class="wrapper">


        </div>

    `,
    styleUrls: [ 'confirm.component.scss' ]

})
export class ConfirmComponent {

    @Input() public config: Confirm;

}
