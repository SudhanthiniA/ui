import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpasscanmodComponent } from './viewpasscanmod.component';

describe('ViewpasscanmodComponent', () => {
  let component: ViewpasscanmodComponent;
  let fixture: ComponentFixture<ViewpasscanmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpasscanmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpasscanmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
