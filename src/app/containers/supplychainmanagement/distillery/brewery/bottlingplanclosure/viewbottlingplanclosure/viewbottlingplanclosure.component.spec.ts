import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingplanclosureComponent } from './viewbottlingplanclosure.component';

describe('ViewbottlingplanclosureComponent', () => {
  let component: ViewbottlingplanclosureComponent;
  let fixture: ComponentFixture<ViewbottlingplanclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingplanclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingplanclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
