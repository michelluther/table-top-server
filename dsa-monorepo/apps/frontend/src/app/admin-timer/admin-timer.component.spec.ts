import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimerComponent } from './admin-timer.component';

describe('AdminTimerComponent', () => {
  let component: AdminTimerComponent;
  let fixture: ComponentFixture<AdminTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
