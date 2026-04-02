import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTalentComponent } from './edit-talent.component';

describe('EditTalentComponent', () => {
  let component: EditTalentComponent;
  let fixture: ComponentFixture<EditTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
