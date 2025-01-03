import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmstistComponent } from './viewmstist.component';

describe('ViewmstistComponent', () => {
  let component: ViewmstistComponent;
  let fixture: ComponentFixture<ViewmstistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmstistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmstistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
