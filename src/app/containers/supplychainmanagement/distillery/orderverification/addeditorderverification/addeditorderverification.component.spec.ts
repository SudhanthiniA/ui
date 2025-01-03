import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditorderverificationComponent } from './addeditorderverification.component';

describe('AddeditorderverificationComponent', () => {
  let component: AddeditorderverificationComponent;
  let fixture: ComponentFixture<AddeditorderverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditorderverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditorderverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
