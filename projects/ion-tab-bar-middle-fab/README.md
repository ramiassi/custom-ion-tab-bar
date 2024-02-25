# IonTabBarMiddleFab

This ionic UI component tries to provide an easy way to put fab button in the middle of the tab bar with a transparent background.

![ionic tab bar middle fab button light](https://raw.githubusercontent.com/ramiassi/custom-ion-tab-bar/main/projects/ion-tab-bar-middle-fab/screentshots/light.png)

![ionic tab bar middle fab button dark](https://raw.githubusercontent.com/ramiassi/custom-ion-tab-bar/main/projects/ion-tab-bar-middle-fab/screentshots/dark.png)

## Installation

`npm install ion-tab-bar-middle-fab` 


## Usage Example

You can use it just like the normal `ion-tab-bar` component. You only need to specify the slot for each `ion-tab-button` and the `ion-fab-button`. 

There are three slots that you can use:

- left-side
- middle-fab
- right-side

Add `IonTabBarMiddleFabModule` to the imported modules.

tabs.module.ts
```javascript
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonTabBarMiddleFabModule,
    ------
  ],
  declarations: [TabsPage]
})
```

tabs.page.html

```html
<ion-tabs>  
  <ion-tab-bar-middle-fab slot="bottom">
    <ion-tab-button tab="tab-encounters" slot="left-side">
      <ion-icon name="compass"></ion-icon>
    </ion-tab-button>

    <ion-tab-button tab="tab-conversations" slot="left-side">
      <ion-icon name="chatbubbles"></ion-icon>
      <ion-badge>9</ion-badge>
    </ion-tab-button>
    
    <ion-fab-button slot="middle-fab" color="danger" (click)="fabClick()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>

    <ion-tab-button tab="tab-notifications" slot="right-side">
      <ion-icon name="notifications"></ion-icon>
      <ion-badge>9</ion-badge>
    </ion-tab-button>

    <ion-tab-button tab="tab-profile" slot="right-side">
      <ion-icon name="person"></ion-icon>
    </ion-tab-button>
  </ion-tab-bar-middle-fab>
</ion-tabs>
```
> Note: You need to have equal number of ion-tab-button components on each side to get the desired result. The ion-fab-button should be in the middle-fab slot too.

