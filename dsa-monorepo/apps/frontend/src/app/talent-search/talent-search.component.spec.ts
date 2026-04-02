import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSearchComponent } from './talent-search.component';

describe('TalentSearchComponent', () => {
  let component: TalentSearchComponent;
  let fixture: ComponentFixture<TalentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
