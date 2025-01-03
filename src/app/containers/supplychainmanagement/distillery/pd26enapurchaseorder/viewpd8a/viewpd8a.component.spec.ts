import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd8aComponent } from './viewpd8a.component';

describe('Viewpd8aComponent', () => {
  let component: Viewpd8aComponent;
  let fixture: ComponentFixture<Viewpd8aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd8aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd8aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
