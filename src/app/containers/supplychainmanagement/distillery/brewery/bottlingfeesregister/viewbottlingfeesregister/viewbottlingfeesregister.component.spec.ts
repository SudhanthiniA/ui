import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingfeesregisterComponent } from './viewbottlingfeesregister.component';

describe('ViewbottlingfeesregisterComponent', () => {
  let component: ViewbottlingfeesregisterComponent;
  let fixture: ComponentFixture<ViewbottlingfeesregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingfeesregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingfeesregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
