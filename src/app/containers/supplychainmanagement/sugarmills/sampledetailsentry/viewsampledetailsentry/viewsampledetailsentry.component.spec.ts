import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsampledetailsentryComponent } from './viewsampledetailsentry.component';

describe('ViewsampledetailsentryComponent', () => {
  let component: ViewsampledetailsentryComponent;
  let fixture: ComponentFixture<ViewsampledetailsentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsampledetailsentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsampledetailsentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
