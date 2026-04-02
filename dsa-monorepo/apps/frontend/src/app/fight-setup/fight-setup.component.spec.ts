import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightSetupComponent } from './fight-setup.component';

describe('FightSetupComponent', () => {
  let component: FightSetupComponent;
  let fixture: ComponentFixture<FightSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
