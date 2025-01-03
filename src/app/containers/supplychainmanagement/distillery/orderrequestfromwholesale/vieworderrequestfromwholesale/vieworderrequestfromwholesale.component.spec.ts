import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderrequestfromwholesaleComponent } from './vieworderrequestfromwholesale.component';

describe('VieworderrequestfromwholesaleComponent', () => {
  let component: VieworderrequestfromwholesaleComponent;
  let fixture: ComponentFixture<VieworderrequestfromwholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderrequestfromwholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderrequestfromwholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
