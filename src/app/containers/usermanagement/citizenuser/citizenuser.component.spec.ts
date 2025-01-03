import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenuserComponent } from './citizenuser.component';

describe('CitizenuserComponent', () => {
  let component: CitizenuserComponent;
  let fixture: ComponentFixture<CitizenuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
