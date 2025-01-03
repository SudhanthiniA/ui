import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdistexpunitOutsideindiaComponent } from './regdistexpunit-outsideindia.component';

describe('RegdistexpunitOutsideindiaComponent', () => {
  let component: RegdistexpunitOutsideindiaComponent;
  let fixture: ComponentFixture<RegdistexpunitOutsideindiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegdistexpunitOutsideindiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegdistexpunitOutsideindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
