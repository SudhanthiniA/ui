import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditorderpickingComponent } from './addeditorderpicking.component';

describe('AddeditorderpickingComponent', () => {
  let component: AddeditorderpickingComponent;
  let fixture: ComponentFixture<AddeditorderpickingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditorderpickingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditorderpickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
