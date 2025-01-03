import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrolemanageComponent } from './addrolemanage.component';

describe('AddrolemanageComponent', () => {
  let component: AddrolemanageComponent;
  let fixture: ComponentFixture<AddrolemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrolemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrolemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
