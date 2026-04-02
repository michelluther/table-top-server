import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicDisplayComponent } from './magic-display.component';

describe('MagicDisplayComponent', () => {
  let component: MagicDisplayComponent;
  let fixture: ComponentFixture<MagicDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
