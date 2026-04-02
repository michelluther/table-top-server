import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteControlReceiverComponent } from './remote-control-receiver.component';

describe('RemoteControlReceiverComponent', () => {
  let component: RemoteControlReceiverComponent;
  let fixture: ComponentFixture<RemoteControlReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteControlReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteControlReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
