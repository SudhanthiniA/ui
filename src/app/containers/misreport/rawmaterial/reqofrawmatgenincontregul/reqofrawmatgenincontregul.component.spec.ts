import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqofrawmatgenincontregulComponent } from './reqofrawmatgenincontregul.component';

describe('ReqofrawmatgenincontregulComponent', () => {
  let component: ReqofrawmatgenincontregulComponent;
  let fixture: ComponentFixture<ReqofrawmatgenincontregulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqofrawmatgenincontregulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqofrawmatgenincontregulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
