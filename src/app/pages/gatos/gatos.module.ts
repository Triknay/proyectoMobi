import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatosPageRoutingModule } from './gatos-routing.module';

import { GatosPage } from './gatos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    GatosPageRoutingModule
  ],
  declarations: [GatosPage]
})
export class GatosPageModule {}
