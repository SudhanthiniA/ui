import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateofmattermasterComponent } from './stateofmattermaster.component';

describe('StateofmattermasterComponent', () => {
  let component: StateofmattermasterComponent;
  let fixture: ComponentFixture<StateofmattermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateofmattermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateofmattermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
