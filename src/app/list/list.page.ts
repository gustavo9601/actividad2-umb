import {Component, OnInit} from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {



    busqueda:string = '';
    mensajes:string[] = [];

    constructor(private nativeStorage: NativeStorage,
                public toastController: ToastController) { }


    ngOnInit() {
        this.obtenerMensajes();
    }


    guardarMensaje(){

        this.mensajes.push(this.busqueda);
        let datos = this.mensajes.join(',');
        this.nativeStorage.setItem('mensajes', datos)
            .then(

                () => {
                    this.mostrarToast('El Mensaje se guardo correctamente');
                    this.obtenerMensajes();
                    console.log('Stored item!')
                },
                error => {

                    this.mostrarToast('El Mensaje no se pudo guardar');
                    console.error('Error storing item', error)
                }
            );
    }


    obtenerMensajes(){
        this.nativeStorage.getItem('mensajes')
            .then(
                (data:string) => {
                    console.log(data)
                    this.mensajes =   data.split(',',);
                },
                error => console.error(error)
            );
    }


    async mostrarToast(mensaje:string) {
        const toast = await this.toastController.create({
            message: mensaje,
            duration: 2000
        });
        toast.present();
    }

}
