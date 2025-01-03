import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsampletestfeesComponent } from './viewsampletestfees.component';

describe('ViewsampletestfeesComponent', () => {
  let component: ViewsampletestfeesComponent;
  let fixture: ComponentFixture<ViewsampletestfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsampletestfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsampletestfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
