import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminosComponent } from './terminos/terminos.component';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TerminosComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    TerminosComponent,
  ]
})
export class OtherModule { }
