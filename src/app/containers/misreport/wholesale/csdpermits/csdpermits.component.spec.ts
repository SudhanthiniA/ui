import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdpermitsComponent } from './csdpermits.component';

describe('CsdpermitsComponent', () => {
  let component: CsdpermitsComponent;
  let fixture: ComponentFixture<CsdpermitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsdpermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdpermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
