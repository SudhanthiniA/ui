import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockinomdComponent } from './viewstockinomd.component';

describe('ViewstockinomdComponent', () => {
  let component: ViewstockinomdComponent;
  let fixture: ComponentFixture<ViewstockinomdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockinomdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockinomdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
