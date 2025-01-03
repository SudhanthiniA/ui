import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankmixingComponent } from './tankmixing.component';

describe('TankmixingComponent', () => {
  let component: TankmixingComponent;
  let fixture: ComponentFixture<TankmixingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankmixingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankmixingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
