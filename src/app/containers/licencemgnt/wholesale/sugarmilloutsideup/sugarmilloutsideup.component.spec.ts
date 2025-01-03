import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarmilloutsideupComponent } from './sugarmilloutsideup.component';

describe('SugarmilloutsideupComponent', () => {
  let component: SugarmilloutsideupComponent;
  let fixture: ComponentFixture<SugarmilloutsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarmilloutsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarmilloutsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
