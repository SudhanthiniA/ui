import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcercisecommisionerComponent } from './excercisecommisioner.component';

describe('ExcercisecommisionerComponent', () => {
  let component: ExcercisecommisionerComponent;
  let fixture: ComponentFixture<ExcercisecommisionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcercisecommisionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcercisecommisionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
