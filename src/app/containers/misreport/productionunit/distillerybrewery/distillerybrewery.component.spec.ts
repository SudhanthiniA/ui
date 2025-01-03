import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistillerybreweryComponent } from './distillerybrewery.component';

describe('DistillerybreweryComponent', () => {
  let component: DistillerybreweryComponent;
  let fixture: ComponentFixture<DistillerybreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistillerybreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistillerybreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
