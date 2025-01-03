import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditliquortypeComponent } from './addeditliquortype.component';

describe('AddeditliquortypeComponent', () => {
  let component: AddeditliquortypeComponent;
  let fixture: ComponentFixture<AddeditliquortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditliquortypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditliquortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
