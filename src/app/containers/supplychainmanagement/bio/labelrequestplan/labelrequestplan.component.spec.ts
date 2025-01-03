import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelrequestplanComponent } from './labelrequestplan.component';

describe('LabelrequestplanComponent', () => {
  let component: LabelrequestplanComponent;
  let fixture: ComponentFixture<LabelrequestplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelrequestplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelrequestplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
