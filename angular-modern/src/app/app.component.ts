import {Component} from '@angular/core';
import bulletTrain from 'bullet-train-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  has_loaded = false;
  instant_messaging = false;
  font_size = 12;

  constructor() {
    var environmentID = "QjgYur4LQTwe5HpvbvhpzK";
    bulletTrain.init({
      environmentID: environmentID,
      onChange: () => {
        this.has_loaded = true;
        this.instant_messaging = bulletTrain.hasFeature("instant_messaging");
        this.font_size = bulletTrain.getValue("font_size");
        console.log("Received flags", bulletTrain.getAllFlags())
      }
    });
  }
}
