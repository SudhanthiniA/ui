import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditorderallocationComponent } from './addeditorderallocation.component';

describe('AddeditorderallocationComponent', () => {
  let component: AddeditorderallocationComponent;
  let fixture: ComponentFixture<AddeditorderallocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditorderallocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditorderallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
