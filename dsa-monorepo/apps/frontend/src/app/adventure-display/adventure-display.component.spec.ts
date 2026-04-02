import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureDisplayComponent } from './adventure-display.component';

describe('AdventureDisplayComponent', () => {
  let component: AdventureDisplayComponent;
  let fixture: ComponentFixture<AdventureDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
