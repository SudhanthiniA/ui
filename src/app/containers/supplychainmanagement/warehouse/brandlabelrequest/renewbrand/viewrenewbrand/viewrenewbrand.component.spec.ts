import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrenewbrandComponent } from './viewrenewbrand.component';

describe('ViewrenewbrandComponent', () => {
  let component: ViewrenewbrandComponent;
  let fixture: ComponentFixture<ViewrenewbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrenewbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrenewbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
