import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsamplexaminationComponent } from './viewsamplexamination.component';

describe('ViewsamplexaminationComponent', () => {
  let component: ViewsamplexaminationComponent;
  let fixture: ComponentFixture<ViewsamplexaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsamplexaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsamplexaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
