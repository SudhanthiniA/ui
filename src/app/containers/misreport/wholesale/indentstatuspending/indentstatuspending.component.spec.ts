import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentstatuspendingComponent } from './indentstatuspending.component';

describe('IndentstatuspendingComponent', () => {
  let component: IndentstatuspendingComponent;
  let fixture: ComponentFixture<IndentstatuspendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentstatuspendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentstatuspendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
