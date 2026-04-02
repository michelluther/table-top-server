import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellSearchComponent } from './spell-search.component';

describe('SpellSearchComponent', () => {
  let component: SpellSearchComponent;
  let fixture: ComponentFixture<SpellSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
