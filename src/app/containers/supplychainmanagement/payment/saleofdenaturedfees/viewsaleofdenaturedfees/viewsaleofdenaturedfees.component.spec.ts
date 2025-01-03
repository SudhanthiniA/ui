import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsaleofdenaturedfeesComponent } from './viewsaleofdenaturedfees.component';

describe('ViewsaleofdenaturedfeesComponent', () => {
  let component: ViewsaleofdenaturedfeesComponent;
  let fixture: ComponentFixture<ViewsaleofdenaturedfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsaleofdenaturedfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsaleofdenaturedfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
