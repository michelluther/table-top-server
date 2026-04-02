import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletionComponent } from './confirm-deletion.component';

describe('ConfirmDeletionComponent', () => {
  let component: ConfirmDeletionComponent;
  let fixture: ComponentFixture<ConfirmDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
