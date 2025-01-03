import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingtypeComponent } from './viewbottlingtype.component';

describe('ViewbottlingtypeComponent', () => {
  let component: ViewbottlingtypeComponent;
  let fixture: ComponentFixture<ViewbottlingtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
