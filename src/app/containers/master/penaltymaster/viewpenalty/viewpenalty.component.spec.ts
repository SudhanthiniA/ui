import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpenaltyComponent } from './viewpenalty.component';

describe('ViewpenaltyComponent', () => {
  let component: ViewpenaltyComponent;
  let fixture: ComponentFixture<ViewpenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpenaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
