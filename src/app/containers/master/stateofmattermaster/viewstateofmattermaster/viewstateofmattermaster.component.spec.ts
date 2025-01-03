import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstateofmattermasterComponent } from './viewstateofmattermaster.component';

describe('ViewstateofmattermasterComponent', () => {
  let component: ViewstateofmattermasterComponent;
  let fixture: ComponentFixture<ViewstateofmattermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstateofmattermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstateofmattermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
