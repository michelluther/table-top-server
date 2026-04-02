import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSheetComponent } from './confirmation-sheet.component';

describe('ConfirmationSheetComponent', () => {
  let component: ConfirmationSheetComponent;
  let fixture: ComponentFixture<ConfirmationSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
