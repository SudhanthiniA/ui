import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditPd9aComponent } from './addedit-pd9a.component';

describe('AddeditPd9aComponent', () => {
  let component: AddeditPd9aComponent;
  let fixture: ComponentFixture<AddeditPd9aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditPd9aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditPd9aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
