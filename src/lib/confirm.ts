export class Confirm {

    public confirmLabel: string = 'OK';
    public confirmBackgroundColor?: string = '#EE20D5';
    public title: string;
    public message: string;
    public messageFontSize?: string = '20px';
    public messageFontColor?: string = '#333';
    public width?: string = '300px';
    public height?: string = '220px';

    public constructor(o: Confirm) {

        Object.assign(this, o);

    }

}
