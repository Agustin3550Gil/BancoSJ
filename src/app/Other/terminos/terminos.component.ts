import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss'],
})
export class TerminosComponent  implements OnInit {


  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Aquí puedes simular un error o redirigir según tu lógica de negocio
    const isError = true; // Cambia esto según tus necesidades

    if (isError) {
      this.router.navigateByUrl('/error'); // Redirige a la página de error
    }
  }

  ngOnInit() {}

}
