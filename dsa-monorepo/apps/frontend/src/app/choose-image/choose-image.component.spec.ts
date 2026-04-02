import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseImageComponent } from './choose-image.component';

describe('ChooseImageComponent', () => {
  let component: ChooseImageComponent;
  let fixture: ComponentFixture<ChooseImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
