import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfeeComponent } from './viewfee.component';

describe('ViewfeeComponent', () => {
  let component: ViewfeeComponent;
  let fixture: ComponentFixture<ViewfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
