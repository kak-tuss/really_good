import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }
  convertHSLToHex(h: number,s: number,l: number) {
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0, 
        b = 0; 
  
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    let r_string = Math.round((r + m) * 255).toString(16),
        g_string = Math.round((g + m) * 255).toString(16),
        b_string = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (r_string.length == 1)
      r_string = "0" + r;
    if (g_string.length == 1)
      g_string = "0" + g;
    if (b_string.length == 1)
      b_string = "0" + b;
  
    return "#" + r_string + g_string + b_string;
  }
}
