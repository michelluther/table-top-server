import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttributeComponent } from './edit-attribute.component';

describe('EditAttributeComponent', () => {
  let component: EditAttributeComponent;
  let fixture: ComponentFixture<EditAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
