import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewentitytypeComponent } from './viewentitytype.component';

describe('ViewentitytypeComponent', () => {
  let component: ViewentitytypeComponent;
  let fixture: ComponentFixture<ViewentitytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewentitytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewentitytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
