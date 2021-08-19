import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit, AfterViewInit {
  @ViewChild('pickerbox', { static: false }) divPickerbox!: ElementRef;
  
  hue: number = 260;
  pickerWidthSat: number = 0;
  pickerHeightLight: number = 0;
  sat: number = 0;
  light: number = 0;
  bgColor: string = '#000000';

  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.divPickerbox);
    this.pickerWidthSat = this.divPickerbox?.nativeElement.clientWidth;
    this.pickerHeightLight = this.divPickerbox?.nativeElement.clientHeight;
  }


  pickColor(e: Event) {
    console.log(this.pickerWidthSat, this.pickerHeightLight);
    console.log((<MouseEvent>e).offsetX, (<MouseEvent>e).offsetY);

    this.sat = 100 - Math.round((<MouseEvent>e).offsetX / this.pickerWidthSat * 100);
    this.light = 100 - Math.round((<MouseEvent>e).offsetY / this.pickerHeightLight * 100);

    this.bgColor = this.colorService.convertHSLToHex(this.hue, this.sat, this.light);
        

  }

}
