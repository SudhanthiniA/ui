import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmstistmolassesComponent } from './viewmstistmolasses.component';

describe('ViewmstistmolassesComponent', () => {
  let component: ViewmstistmolassesComponent;
  let fixture: ComponentFixture<ViewmstistmolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmstistmolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmstistmolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
