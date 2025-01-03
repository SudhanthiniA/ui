import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreservedmolassesreportComponent } from './unreservedmolassesreport.component';

describe('UnreservedmolassesreportComponent', () => {
  let component: UnreservedmolassesreportComponent;
  let fixture: ComponentFixture<UnreservedmolassesreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreservedmolassesreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreservedmolassesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
