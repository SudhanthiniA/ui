import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddistillerytypeComponent } from './adddistillerytype.component';

describe('AdddistillerytypeComponent', () => {
  let component: AdddistillerytypeComponent;
  let fixture: ComponentFixture<AdddistillerytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddistillerytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddistillerytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
