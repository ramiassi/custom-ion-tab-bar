import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { IonTabBarMiddleFabModule } from 'ion-tab-bar-middle-fab';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonTabBarMiddleFabModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
