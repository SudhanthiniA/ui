import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdpermitComponent } from './csdpermit.component';

describe('CsdpermitComponent', () => {
  let component: CsdpermitComponent;
  let fixture: ComponentFixture<CsdpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsdpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
