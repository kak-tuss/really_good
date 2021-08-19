import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ColorService } from '../color.service';

export interface HSLColor {
  hue: number,
  saturation: number,
  lightness: number
}

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})

export class PickerComponent implements OnInit, AfterViewInit {
  @ViewChild('pickerbox', { static: false }) divPickerbox!: ElementRef;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  
  color: HSLColor = {
    hue: 260,
    saturation: 0,
    lightness: 0
  }

  pickerWidthSat: number = 0;
  pickerHeightLight: number = 0;

  bgColor: string = '#000000';

  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.pickerWidthSat = this.divPickerbox?.nativeElement.clientWidth;
    this.pickerHeightLight = this.divPickerbox?.nativeElement.clientHeight;
  }

  pickColor(e: Event) {
    this.color.saturation = 100 - Math.round((<MouseEvent>e).offsetX / this.pickerWidthSat * 100);
    this.color.lightness = 100 - Math.round((<MouseEvent>e).offsetY / this.pickerHeightLight * 100);

    this.bgColor = this.colorService.convertHSLToHex(this.color.hue, this.color.saturation, this.color.lightness);
  }

  preview(e: Event) {
    e.preventDefault();
    this.change.emit(this.bgColor);
  }

  setFormula(): string {
    return `hsl(${this.color.hue}, ${this.color.saturation}%, ${this.color.lightness}%)`;
  }
}
