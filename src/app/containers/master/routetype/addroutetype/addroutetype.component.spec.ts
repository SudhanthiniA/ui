import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroutetypeComponent } from './addroutetype.component';

describe('AddroutetypeComponent', () => {
  let component: AddroutetypeComponent;
  let fixture: ComponentFixture<AddroutetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddroutetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroutetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
