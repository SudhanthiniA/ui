import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittransitgatepassComponent } from './edittransitgatepass.component';

describe('EdittransitgatepassComponent', () => {
  let component: EdittransitgatepassComponent;
  let fixture: ComponentFixture<EdittransitgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittransitgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittransitgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
