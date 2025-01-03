import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RptbwflimportpermitComponent } from './rptbwflimportpermit.component';

describe('RptbwflimportpermitComponent', () => {
  let component: RptbwflimportpermitComponent;
  let fixture: ComponentFixture<RptbwflimportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RptbwflimportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RptbwflimportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
