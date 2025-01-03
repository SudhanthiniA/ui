import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditMf12molassesregisterComponent } from './addedit-mf12molassesregister.component';

describe('AddeditMf12molassesregisterComponent', () => {
  let component: AddeditMf12molassesregisterComponent;
  let fixture: ComponentFixture<AddeditMf12molassesregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditMf12molassesregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditMf12molassesregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
