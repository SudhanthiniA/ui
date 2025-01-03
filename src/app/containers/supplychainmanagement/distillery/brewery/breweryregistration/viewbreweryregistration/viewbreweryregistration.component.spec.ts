import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbreweryregistrationComponent } from './viewbreweryregistration.component';

describe('ViewbreweryregistrationComponent', () => {
  let component: ViewbreweryregistrationComponent;
  let fixture: ComponentFixture<ViewbreweryregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbreweryregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbreweryregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
