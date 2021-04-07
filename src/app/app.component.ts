/* tslint:disable:no-inferrable-types */
import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TimerServiceService} from './timer-service.service';
import {TimerStatus} from './timer-status.enum';
import {ModalAction} from './finished-modal/finished-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private timerServiceService: TimerServiceService) {
  }
  interval: FormControl =  new FormControl('30',  Validators.pattern('[0-9]*$'));
  buttonLabel: string = 'Start';
  done: boolean = false;

  change() {
    this.timerServiceService.setInterval(this.interval.value);
  }

  buttonClick() {
    this.timerServiceService.toggleTimer();
  }

  ngOnInit(): void {
    this.timerServiceService.status$.subscribe((status: TimerStatus) => {
      switch (status) {
        case TimerStatus.START:
          this.buttonLabel = 'Stop';
          break;
        case TimerStatus.STOP:
          this.buttonLabel = 'Start';
          break;
      }
    });
  }

  timerDone() {
    this.done = true;
  }

  modalAction($event: ModalAction) {
    switch ($event) {
      case ModalAction.REPEAT:
        this.timerServiceService.reset();
        this.timerServiceService.toggleTimer();
        break;
    }
    this.done = false;
  }
}
