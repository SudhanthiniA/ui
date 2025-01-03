import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingproplannewComponent } from './viewbottlingproplannew.component';

describe('ViewbottlingproplannewComponent', () => {
  let component: ViewbottlingproplannewComponent;
  let fixture: ComponentFixture<ViewbottlingproplannewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingproplannewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingproplannewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
