import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsonindentsComponent } from './reportsonindents.component';

describe('ReportsonindentsComponent', () => {
  let component: ReportsonindentsComponent;
  let fixture: ComponentFixture<ReportsonindentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsonindentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsonindentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
