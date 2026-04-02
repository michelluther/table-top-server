import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatDataDisplayComponent } from './combat-data-display.component';

describe('CombatDataDisplayComponent', () => {
  let component: CombatDataDisplayComponent;
  let fixture: ComponentFixture<CombatDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatDataDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
