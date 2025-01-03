import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvendortemplateComponent } from './viewvendortemplate.component';

describe('ViewvendortemplateComponent', () => {
  let component: ViewvendortemplateComponent;
  let fixture: ComponentFixture<ViewvendortemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvendortemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvendortemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
