import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditdomainComponent } from './addeditdomain.component';

describe('AddeditdomainComponent', () => {
  let component: AddeditdomainComponent;
  let fixture: ComponentFixture<AddeditdomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditdomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditdomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
