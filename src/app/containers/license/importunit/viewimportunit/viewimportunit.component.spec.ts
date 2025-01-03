import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimportunitComponent } from './viewimportunit.component';

describe('ViewimportunitComponent', () => {
  let component: ViewimportunitComponent;
  let fixture: ComponentFixture<ViewimportunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimportunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimportunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
