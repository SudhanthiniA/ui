import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditPd9cComponent } from './addedit-pd9c.component';

describe('AddeditPd9cComponent', () => {
  let component: AddeditPd9cComponent;
  let fixture: ComponentFixture<AddeditPd9cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditPd9cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditPd9cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
