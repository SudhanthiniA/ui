import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexticketComponent } from './viewexticket.component';

describe('ViewexticketComponent', () => {
  let component: ViewexticketComponent;
  let fixture: ComponentFixture<ViewexticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
