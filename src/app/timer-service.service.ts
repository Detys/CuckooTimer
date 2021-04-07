import {EventEmitter, Injectable} from '@angular/core';
import {TimerStatus} from './timer-status.enum';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerServiceService {
  public eventEmitter: EventEmitter<TimerStatus> = new EventEmitter<TimerStatus>();
  public status$: BehaviorSubject<TimerStatus> = new BehaviorSubject<TimerStatus>(TimerStatus.STOP);
  public interval$: BehaviorSubject<number> = new BehaviorSubject<number>(30 );

  public toggleTimer(): void {
    if (this.status$.getValue() === TimerStatus.START) {
      this.setAndEmmit(TimerStatus.STOP);
    } else if (this.status$.getValue() === TimerStatus.STOP) {
      this.setAndEmmit(TimerStatus.START);
    }
  }
  public stopTimer(): void {
      this.setAndEmmit(TimerStatus.STOP);
  }

  public setInterval(interval: number) {
    this.interval$.next(interval);
  }

  public reset(): void {
    this.interval$.next(this.interval$.getValue());
  }

  private setAndEmmit(timerStatus: TimerStatus) {
    this.eventEmitter.emit(timerStatus);
    this.status$.next(timerStatus);
  }
}
