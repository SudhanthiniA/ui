import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusreportoccComponent } from './statusreportocc.component';

describe('StatusreportoccComponent', () => {
  let component: StatusreportoccComponent;
  let fixture: ComponentFixture<StatusreportoccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusreportoccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusreportoccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
