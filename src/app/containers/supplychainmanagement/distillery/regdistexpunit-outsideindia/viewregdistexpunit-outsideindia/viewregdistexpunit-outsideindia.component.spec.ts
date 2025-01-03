import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregdistexpunitOutsideindiaComponent } from './viewregdistexpunit-outsideindia.component';

describe('ViewregdistexpunitOutsideindiaComponent', () => {
  let component: ViewregdistexpunitOutsideindiaComponent;
  let fixture: ComponentFixture<ViewregdistexpunitOutsideindiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewregdistexpunitOutsideindiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewregdistexpunitOutsideindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
