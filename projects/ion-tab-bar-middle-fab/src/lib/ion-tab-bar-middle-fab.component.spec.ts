import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonTabBarMiddleFabComponent } from './ion-tab-bar-middle-fab.component';

describe('IonTabBarMiddleFabComponent', () => {
  let component: IonTabBarMiddleFabComponent;
  let fixture: ComponentFixture<IonTabBarMiddleFabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonTabBarMiddleFabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonTabBarMiddleFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
