import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpellComponent } from './edit-spell.component';

describe('EditSpellComponent', () => {
  let component: EditSpellComponent;
  let fixture: ComponentFixture<EditSpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
