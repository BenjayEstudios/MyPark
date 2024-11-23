import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosCobrosPage } from './pagos-cobros.page';

const routes: Routes = [
  {
    path: '',
    component: PagosCobrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosCobrosPageRoutingModule {}
