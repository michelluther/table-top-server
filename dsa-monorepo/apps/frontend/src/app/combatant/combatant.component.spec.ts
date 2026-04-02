import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantComponent } from './combatant.component';

describe('CombatantComponent', () => {
  let component: CombatantComponent;
  let fixture: ComponentFixture<CombatantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
