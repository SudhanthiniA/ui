import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewboxingComponent } from './viewboxing.component';

describe('ViewboxingComponent', () => {
  let component: ViewboxingComponent;
  let fixture: ComponentFixture<ViewboxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewboxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewboxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
