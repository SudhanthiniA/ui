import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditstrengthComponent } from './addeditstrength.component';

describe('AddeditstrengthComponent', () => {
  let component: AddeditstrengthComponent;
  let fixture: ComponentFixture<AddeditstrengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditstrengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditstrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
