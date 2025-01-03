import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtankoverviewComponent } from './viewtankoverview.component';

describe('ViewtankoverviewComponent', () => {
  let component: ViewtankoverviewComponent;
  let fixture: ComponentFixture<ViewtankoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtankoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtankoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
