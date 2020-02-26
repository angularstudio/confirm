import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { Confirm }    from './confirm';

@Injectable({
    providedIn: 'root'
})
export class ConfirmConfigService {

    public click$: Subject<boolean>;

    public config: Confirm;

}
