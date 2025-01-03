import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntimationforbrewplanComponent } from './intimationforbrewplan.component';

describe('IntimationforbrewplanComponent', () => {
  let component: IntimationforbrewplanComponent;
  let fixture: ComponentFixture<IntimationforbrewplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntimationforbrewplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntimationforbrewplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
