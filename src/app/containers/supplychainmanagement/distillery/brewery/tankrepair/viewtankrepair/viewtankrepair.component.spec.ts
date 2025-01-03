import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtankrepairComponent } from './viewtankrepair.component';

describe('ViewtankrepairComponent', () => {
  let component: ViewtankrepairComponent;
  let fixture: ComponentFixture<ViewtankrepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtankrepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtankrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
