import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDialogComponent } from './timer-dialog.component';

describe('TimerDialogComponent', () => {
  let component: TimerDialogComponent;
  let fixture: ComponentFixture<TimerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
