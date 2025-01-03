import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtanktypeComponent } from './viewtanktype.component';

describe('ViewtanktypeComponent', () => {
  let component: ViewtanktypeComponent;
  let fixture: ComponentFixture<ViewtanktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtanktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtanktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
