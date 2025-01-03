import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpdEightComponent } from './viewpd-eight.component';

describe('ViewpdEightComponent', () => {
  let component: ViewpdEightComponent;
  let fixture: ComponentFixture<ViewpdEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpdEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpdEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
