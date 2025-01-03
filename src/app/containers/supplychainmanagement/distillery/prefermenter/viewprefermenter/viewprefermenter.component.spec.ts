import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprefermenterComponent } from './viewprefermenter.component';

describe('ViewprefermenterComponent', () => {
  let component: ViewprefermenterComponent;
  let fixture: ComponentFixture<ViewprefermenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprefermenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprefermenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
