import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataDisplayComponent } from './basic-data-display.component';

describe('BasicDataDisplayComponent', () => {
  let component: BasicDataDisplayComponent;
  let fixture: ComponentFixture<BasicDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDataDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
