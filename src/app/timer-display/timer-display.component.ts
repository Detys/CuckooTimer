import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TimerServiceService} from '../timer-service.service';
import {TimerStatus} from '../timer-status.enum';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html'
})
export class TimerDisplayComponent implements OnInit {
  active: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  remaining!: number;

  timeOutSetInterval!: any;

  @Output()
  timerDone: EventEmitter<void> = new EventEmitter<void>();

  constructor(private timerServiceService: TimerServiceService) { }

  ngOnInit(): void {
    this.timerServiceService.interval$.subscribe((interval: number) => {
      this.remaining = interval * 60
      this.timerServiceService.stopTimer();
    })
    this.timerServiceService.eventEmitter.subscribe((event: TimerStatus) => {
      this.active.next(event === TimerStatus.START);
    });

    this.active.subscribe((active: boolean) => {
      if (active) {
        this.timeOutSetInterval = setInterval(() => {
          this.remaining--;
          if (this.remaining <= 0) {
            this.timerServiceService.toggleTimer();
            this.timerServiceService.reset();
            this.timerDone.emit();
          }
        }, 1000);
      } else {
        clearInterval(this.timeOutSetInterval);
      }
    });
  }

  remainingHours() {
    return Math.floor((this.remaining / 60) / 60);
  }

  remainingMinutes() {
    return Math.floor(this.remaining / 60);
  }
}
