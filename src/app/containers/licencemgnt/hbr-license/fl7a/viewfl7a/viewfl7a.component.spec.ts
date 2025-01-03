import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl7aComponent } from './viewfl7a.component';

describe('Viewfl7aComponent', () => {
  let component: Viewfl7aComponent;
  let fixture: ComponentFixture<Viewfl7aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl7aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl7aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
