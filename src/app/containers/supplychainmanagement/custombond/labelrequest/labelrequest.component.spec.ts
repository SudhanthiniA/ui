import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelrequestComponent } from './labelrequest.component';

describe('LabelrequestComponent', () => {
  let component: LabelrequestComponent;
  let fixture: ComponentFixture<LabelrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
