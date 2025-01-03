import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquotatimelineComponent } from './viewquotatimeline.component';

describe('ViewquotatimelineComponent', () => {
  let component: ViewquotatimelineComponent;
  let fixture: ComponentFixture<ViewquotatimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewquotatimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquotatimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
