import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreturnworklistComponent } from './viewreturnworklist.component';

describe('ViewreturnworklistComponent', () => {
  let component: ViewreturnworklistComponent;
  let fixture: ComponentFixture<ViewreturnworklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreturnworklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreturnworklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
