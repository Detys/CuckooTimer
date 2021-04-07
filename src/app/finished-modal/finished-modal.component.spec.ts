import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedModalComponent } from './finished-modal.component';

describe('FinishedModalComponent', () => {
  let component: FinishedModalComponent;
  let fixture: ComponentFixture<FinishedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
