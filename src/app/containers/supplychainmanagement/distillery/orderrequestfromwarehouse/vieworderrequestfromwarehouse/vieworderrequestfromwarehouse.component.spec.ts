import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderrequestfromwarehouseComponent } from './vieworderrequestfromwarehouse.component';

describe('VieworderrequestfromwarehouseComponent', () => {
  let component: VieworderrequestfromwarehouseComponent;
  let fixture: ComponentFixture<VieworderrequestfromwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderrequestfromwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderrequestfromwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
