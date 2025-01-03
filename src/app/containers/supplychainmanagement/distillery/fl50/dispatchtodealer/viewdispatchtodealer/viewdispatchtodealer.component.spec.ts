import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdispatchtodealerComponent } from './viewdispatchtodealer.component';

describe('ViewdispatchtodealerComponent', () => {
  let component: ViewdispatchtodealerComponent;
  let fixture: ComponentFixture<ViewdispatchtodealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdispatchtodealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdispatchtodealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
