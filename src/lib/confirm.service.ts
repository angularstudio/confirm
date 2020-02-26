import { DialogConfig, DialogService } from '@angular.studio/dialog';
import { Injectable }                  from '@angular/core';
import { Subject }                     from 'rxjs';
import { Confirm }                     from './confirm';
import { ConfirmConfigService }        from './confirm-config.service';
import { ConfirmComponent }            from './confirm.component';

@Injectable({
    providedIn: 'root'
})
export class ConfirmService {

    public constructor(private readonly confirmConfigService: ConfirmConfigService,
                       private readonly dialogService: DialogService) {

    }

    public open(config: Confirm): Subject<boolean> {

        this.confirmConfigService.config = config;
        this.confirmConfigService.click$ = new Subject();

        this.dialogService.open(ConfirmComponent, new DialogConfig({

            id: 'confirm',
            title: config.title,

            width: config.width,
            height: config.height,

            footerShow: true,

            deleteShow: false,

            nextShow: true,
            nextBackgroundColor: config.confirmBackgroundColor,
            nextLabel: config.confirmLabel

        }));

        return this.confirmConfigService.click$;

    }

}
