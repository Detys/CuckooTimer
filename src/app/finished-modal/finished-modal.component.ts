import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-finished-modal',
  templateUrl: './finished-modal.component.html'
})
export class FinishedModalComponent implements OnInit, OnDestroy {
  @Output()
  public modalAction: EventEmitter<ModalAction> = new EventEmitter<ModalAction>();
  audio: HTMLAudioElement = new Audio('../../assets/audio/cuckoo-clock.mp3');

  constructor() { }

  ngOnInit(): void {
    this.audio.load();
    this.audio.loop = true;
    this.audio.play();
  }

  goAgain() {
    this.modalAction.emit(ModalAction.REPEAT);
  }

  close() {
    this.modalAction.emit(ModalAction.DONE);
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }
}

export enum ModalAction {
  REPEAT,
  DONE
}
