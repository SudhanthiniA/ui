import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwhmappingComponent } from './viewmwhmapping.component';

describe('ViewmwhmappingComponent', () => {
  let component: ViewmwhmappingComponent;
  let fixture: ComponentFixture<ViewmwhmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwhmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwhmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
