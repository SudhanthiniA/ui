import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockinhandparentunitComponent } from './viewstockinhandparentunit.component';

describe('ViewstockinhandparentunitComponent', () => {
  let component: ViewstockinhandparentunitComponent;
  let fixture: ComponentFixture<ViewstockinhandparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockinhandparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockinhandparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
