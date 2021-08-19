import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorService } from './color.service';
import { PickerComponent } from './picker/picker.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PickerComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
