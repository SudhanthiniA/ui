import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportonplanComponent } from './reportonplan.component';

describe('ReportonplanComponent', () => {
  let component: ReportonplanComponent;
  let fixture: ComponentFixture<ReportonplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportonplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
