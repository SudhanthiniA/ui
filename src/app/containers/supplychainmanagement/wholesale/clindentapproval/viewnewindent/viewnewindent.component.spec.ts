import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnewindentComponent } from './viewnewindent.component';

describe('ViewnewindentComponent', () => {
  let component: ViewnewindentComponent;
  let fixture: ComponentFixture<ViewnewindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnewindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnewindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
