import { Component } from '@angular/core';
import { HSLColor } from './picker/picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-really-good';

  selectedColor: string = "#000000";

  pickerChange(newColor: string) {
    this.selectedColor = newColor;
  }
}
