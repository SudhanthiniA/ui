import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbio1aComponent } from './viewbio1a.component';

describe('Viewbio1aComponent', () => {
  let component: Viewbio1aComponent;
  let fixture: ComponentFixture<Viewbio1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbio1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbio1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
