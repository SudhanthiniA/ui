import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategeoaddressComponent } from './updategeoaddress.component';

describe('UpdategeoaddressComponent', () => {
  let component: UpdategeoaddressComponent;
  let fixture: ComponentFixture<UpdategeoaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdategeoaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategeoaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
