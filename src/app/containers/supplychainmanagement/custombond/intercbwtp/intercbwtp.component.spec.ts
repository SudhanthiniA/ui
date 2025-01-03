import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercbwtpComponent } from './intercbwtp.component';

describe('IntercbwtpComponent', () => {
  let component: IntercbwtpComponent;
  let fixture: ComponentFixture<IntercbwtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercbwtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercbwtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
