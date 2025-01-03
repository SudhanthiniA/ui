import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartdeliveredComponent } from './partdelivered.component';

describe('PartdeliveredComponent', () => {
  let component: PartdeliveredComponent;
  let fixture: ComponentFixture<PartdeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartdeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartdeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
