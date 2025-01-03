import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlabelrequestplanComponent } from './viewlabelrequestplan.component';

describe('ViewlabelrequestplanComponent', () => {
  let component: ViewlabelrequestplanComponent;
  let fixture: ComponentFixture<ViewlabelrequestplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlabelrequestplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlabelrequestplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
