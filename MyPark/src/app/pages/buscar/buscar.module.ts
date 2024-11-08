import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPageRoutingModule } from './buscar-routing.module';

import { BuscarPage } from './buscar.page';
import { MenuModule } from 'src/app/modules/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule,
    MenuModule              // importar
  ],
  declarations: [BuscarPage]
})
export class BuscarPageModule {}
