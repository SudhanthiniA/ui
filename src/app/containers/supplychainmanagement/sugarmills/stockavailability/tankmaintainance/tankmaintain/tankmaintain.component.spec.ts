import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankmaintainComponent } from './tankmaintain.component';

describe('TankmaintainComponent', () => {
  let component: TankmaintainComponent;
  let fixture: ComponentFixture<TankmaintainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankmaintainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankmaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
