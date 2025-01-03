import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprintqrcodesComponent } from './viewprintqrcodes.component';

describe('ViewprintqrcodesComponent', () => {
  let component: ViewprintqrcodesComponent;
  let fixture: ComponentFixture<ViewprintqrcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprintqrcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprintqrcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
