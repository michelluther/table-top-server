import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentCardComponent } from './talent-card.component';

describe('TalentCardComponent', () => {
  let component: TalentCardComponent;
  let fixture: ComponentFixture<TalentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
