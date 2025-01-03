import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpreportsComponent } from './edpreports.component';

describe('EdpreportsComponent', () => {
  let component: EdpreportsComponent;
  let fixture: ComponentFixture<EdpreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdpreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
