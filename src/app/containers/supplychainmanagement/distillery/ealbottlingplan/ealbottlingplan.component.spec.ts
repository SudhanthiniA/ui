import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EalbottlingplanComponent } from './ealbottlingplan.component';

describe('EalbottlingplanComponent', () => {
  let component: EalbottlingplanComponent;
  let fixture: ComponentFixture<EalbottlingplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EalbottlingplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EalbottlingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
