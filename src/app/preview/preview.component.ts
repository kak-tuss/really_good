import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { HSLColor } from '../picker/picker.component';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() color: string = "#000000";

  
  constructor() { }

  ngOnInit(): void {
  }
}
