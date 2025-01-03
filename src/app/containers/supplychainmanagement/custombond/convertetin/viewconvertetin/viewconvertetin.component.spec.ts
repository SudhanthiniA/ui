import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconvertetinComponent } from './viewconvertetin.component';

describe('ViewconvertetinComponent', () => {
  let component: ViewconvertetinComponent;
  let fixture: ComponentFixture<ViewconvertetinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewconvertetinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconvertetinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
