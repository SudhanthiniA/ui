import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtariandsendhicl10aComponent } from './viewtariandsendhicl10a.component';

describe('Viewtariandsendhicl10aComponent', () => {
  let component: Viewtariandsendhicl10aComponent;
  let fixture: ComponentFixture<Viewtariandsendhicl10aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtariandsendhicl10aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtariandsendhicl10aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
