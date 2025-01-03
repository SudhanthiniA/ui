import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankmaintainanceviewComponent } from './tankmaintainanceview.component';

describe('TankmaintainanceviewComponent', () => {
  let component: TankmaintainanceviewComponent;
  let fixture: ComponentFixture<TankmaintainanceviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankmaintainanceviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankmaintainanceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
