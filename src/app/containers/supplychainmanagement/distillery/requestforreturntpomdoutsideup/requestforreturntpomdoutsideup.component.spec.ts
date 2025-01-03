import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforreturntpomdoutsideupComponent } from './requestforreturntpomdoutsideup.component';

describe('RequestforreturntpomdoutsideupComponent', () => {
  let component: RequestforreturntpomdoutsideupComponent;
  let fixture: ComponentFixture<RequestforreturntpomdoutsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestforreturntpomdoutsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestforreturntpomdoutsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
