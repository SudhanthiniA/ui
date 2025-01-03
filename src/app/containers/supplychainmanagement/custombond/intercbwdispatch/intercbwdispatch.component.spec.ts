import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercbwdispatchComponent } from './intercbwdispatch.component';

describe('IntercbwdispatchComponent', () => {
  let component: IntercbwdispatchComponent;
  let fixture: ComponentFixture<IntercbwdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercbwdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercbwdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
