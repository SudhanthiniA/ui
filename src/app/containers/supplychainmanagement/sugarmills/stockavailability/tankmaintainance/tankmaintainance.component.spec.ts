import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankmaintainanceComponent } from './tankmaintainance.component';

describe('TankmaintainanceComponent', () => {
  let component: TankmaintainanceComponent;
  let fixture: ComponentFixture<TankmaintainanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankmaintainanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankmaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
