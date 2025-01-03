import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentstatusrptComponent } from './indentstatusrpt.component';

describe('IndentstatusrptComponent', () => {
  let component: IndentstatusrptComponent;
  let fixture: ComponentFixture<IndentstatusrptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentstatusrptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentstatusrptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
