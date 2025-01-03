import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewethanolorderComponent } from './viewethanolorder.component';

describe('ViewethanolorderComponent', () => {
  let component: ViewethanolorderComponent;
  let fixture: ComponentFixture<ViewethanolorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewethanolorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewethanolorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
