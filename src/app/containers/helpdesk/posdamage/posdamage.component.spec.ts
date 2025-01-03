import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosdamageComponent } from './posdamage.component';

describe('PosdamageComponent', () => {
  let component: PosdamageComponent;
  let fixture: ComponentFixture<PosdamageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosdamageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosdamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
