import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubinspectorComponent } from './subinspector.component';

describe('SubinspectorComponent', () => {
  let component: SubinspectorComponent;
  let fixture: ComponentFixture<SubinspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubinspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubinspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
