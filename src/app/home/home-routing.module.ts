import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TerminosComponent } from '../Other/terminos/terminos.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'Error',
    component: TerminosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
