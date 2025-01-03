import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd5InspectorDiaryComponent } from './pd5-inspector-diary.component';

describe('Pd5InspectorDiaryComponent', () => {
  let component: Pd5InspectorDiaryComponent;
  let fixture: ComponentFixture<Pd5InspectorDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd5InspectorDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd5InspectorDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
