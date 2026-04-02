import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAdditionComponent } from './experience-addition.component';

describe('ExperienceAdditionComponent', () => {
  let component: ExperienceAdditionComponent;
  let fixture: ComponentFixture<ExperienceAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
