import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosCobrosPageRoutingModule } from './pagos-cobros-routing.module';

import { PagosCobrosPage } from './pagos-cobros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosCobrosPageRoutingModule
  ],
  declarations: [PagosCobrosPage]
})
export class PagosCobrosPageModule {}
