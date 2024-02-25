import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonTabBarMiddleFabComponent } from './ion-tab-bar-middle-fab.component';


@NgModule({
  declarations: [IonTabBarMiddleFabComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    IonTabBarMiddleFabComponent
  ]
})
export class IonTabBarMiddleFabModule { }
