import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverselogicComponent } from './reverselogic.component';

describe('ReverselogicComponent', () => {
  let component: ReverselogicComponent;
  let fixture: ComponentFixture<ReverselogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverselogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverselogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
