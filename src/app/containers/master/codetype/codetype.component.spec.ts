import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodetypeComponent } from './codetype.component';

describe('CodetypeComponent', () => {
  let component: CodetypeComponent;
  let fixture: ComponentFixture<CodetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
