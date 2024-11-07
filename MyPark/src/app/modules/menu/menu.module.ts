import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';                             // Importar
import { RouterModule } from '@angular/router';                           // Importar
import { MenuComponent } from 'src/app/components/menu/menu.component';   // Importar


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IonicModule,    //import
    RouterModule    //import
  ],
  exports: [MenuComponent]  //export
})
export class MenuModule { }
