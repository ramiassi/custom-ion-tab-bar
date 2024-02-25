import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ion-tab-bar-middle-fab',
  templateUrl: './ion-tab-bar-middle-fab.component.html',
  styleUrls: ['./ion-tab-bar-middle-fab.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class IonTabBarMiddleFabComponent  implements OnInit {

  @Input()
  slot: 'bottom' | 'top' = 'bottom';
  constructor() { }

  ngOnInit() {}

}
