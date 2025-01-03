import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwtranspasscanmodComponent } from './viewmwtranspasscanmod.component';

describe('ViewmwtranspasscanmodComponent', () => {
  let component: ViewmwtranspasscanmodComponent;
  let fixture: ComponentFixture<ViewmwtranspasscanmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwtranspasscanmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwtranspasscanmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
