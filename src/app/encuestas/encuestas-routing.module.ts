import { EncuestasComponent } from './encuestas/encuestas.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EncuestasrResolver } from './resolves/encuestasr.resolver';
import { VisorComponent } from './visor/visor.component';
const routes: Routes = [
  {
    path: '',
    component: EncuestasComponent,
    resolve: { datos: EncuestasrResolver }
  },
  {
    path: 'visor/:id1/:id2/:id3',
    component: VisorComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestasRoutingModule {}
