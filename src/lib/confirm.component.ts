import { DialogService }        from '@angular.studio/dialog';
import { Component }            from '@angular/core';
import { ConfirmConfigService } from './confirm-config.service';

@Component({

    selector: 'confirm',
    template: `

        <dialogs id="confirm" (nextClick)="onNextClick()">

            <div class="wrapper">

                <div class="message"
                     [style.color]="confirmConfigService.config.messageFontColor"
                     [style.font-size]="confirmConfigService.config.messageFontSize">{{ confirmConfigService.config.message }}</div>

            </div>

        </dialogs>

    `,
    styleUrls: [ 'confirm.component.scss' ]

})
export class ConfirmComponent {

    public constructor(public readonly confirmConfigService: ConfirmConfigService,
                       private readonly dialogService: DialogService) {

    }

    public onNextClick(): void {

        this.confirmConfigService.click$.next(true);

        this.dialogService.close('confirm');

    }

}
