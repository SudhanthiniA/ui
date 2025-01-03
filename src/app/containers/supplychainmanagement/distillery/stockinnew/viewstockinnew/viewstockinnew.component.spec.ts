import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockinnewComponent } from './viewstockinnew.component';

describe('ViewstockinnewComponent', () => {
  let component: ViewstockinnewComponent;
  let fixture: ComponentFixture<ViewstockinnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockinnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockinnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
