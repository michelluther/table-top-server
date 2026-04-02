import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightDisplayComponent } from './fight-display.component';

describe('FightDisplayComponent', () => {
  let component: FightDisplayComponent;
  let fixture: ComponentFixture<FightDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
