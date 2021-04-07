import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { FinishedModalComponent } from './finished-modal/finished-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerDisplayComponent,
    FinishedModalComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
