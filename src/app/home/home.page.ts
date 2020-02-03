import {Component} from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {


    busqueda: string = '';

    constructor(private iab: InAppBrowser) { }


    buscarGoogle() {
        let urlGoogle = this.iab.create('https://google.com/search?q=' + this.busqueda, '_system');

    }
}
