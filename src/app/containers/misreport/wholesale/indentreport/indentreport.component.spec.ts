import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentreportComponent } from './indentreport.component';

describe('IndentreportComponent', () => {
  let component: IndentreportComponent;
  let fixture: ComponentFixture<IndentreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
