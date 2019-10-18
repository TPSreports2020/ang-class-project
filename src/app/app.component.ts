import { Component, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  featureSelected = 'shop';
  switchFeature(feature: string) {
    this.featureSelected = feature;
  }
}


