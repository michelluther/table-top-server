import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesDisplayComponent } from './attributes-display.component';

describe('AttributesDisplayComponent', () => {
  let component: AttributesDisplayComponent;
  let fixture: ComponentFixture<AttributesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
