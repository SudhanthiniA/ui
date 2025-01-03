import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { iIdentprocessoutsideupComponent } from './indentprocessoutsideup.component';

describe('iIdentprocessoutsideupComponent', () => {
  let component: iIdentprocessoutsideupComponent;
  let fixture: ComponentFixture<iIdentprocessoutsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ iIdentprocessoutsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(iIdentprocessoutsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
