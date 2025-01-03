import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdigitallocksComponent } from './viewdigitallocks.component';

describe('ViewdigitallocksComponent', () => {
  let component: ViewdigitallocksComponent;
  let fixture: ComponentFixture<ViewdigitallocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdigitallocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdigitallocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
