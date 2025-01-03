import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditPd9bComponent } from './addedit-pd9b.component';

describe('AddeditPd9bComponent', () => {
  let component: AddeditPd9bComponent;
  let fixture: ComponentFixture<AddeditPd9bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditPd9bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditPd9bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
