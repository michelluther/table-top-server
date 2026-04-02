import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNavigationComponent } from './detail-navigation.component';

describe('DetailNavigationComponent', () => {
  let component: DetailNavigationComponent;
  let fixture: ComponentFixture<DetailNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
