import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingprocessComponent } from './viewbottlingprocess.component';

describe('ViewbottlingprocessComponent', () => {
  let component: ViewbottlingprocessComponent;
  let fixture: ComponentFixture<ViewbottlingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
