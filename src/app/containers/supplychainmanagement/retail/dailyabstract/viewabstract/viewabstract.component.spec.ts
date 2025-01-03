import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewabstractComponent } from './viewabstract.component';

describe('ViewabstractComponent', () => {
  let component: ViewabstractComponent;
  let fixture: ComponentFixture<ViewabstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewabstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewabstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
