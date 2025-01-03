import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfermenterprocessComponent } from './viewfermenterprocess.component';

describe('ViewfermenterprocessComponent', () => {
  let component: ViewfermenterprocessComponent;
  let fixture: ComponentFixture<ViewfermenterprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfermenterprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfermenterprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
