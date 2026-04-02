import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeDisplayComponent } from './life-display.component';

describe('LifeDisplayComponent', () => {
  let component: LifeDisplayComponent;
  let fixture: ComponentFixture<LifeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
