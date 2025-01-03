import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonocartontransportpassfinalComponent } from './monocartontransportpassfinal.component';

describe('MonocartontransportpassfinalComponent', () => {
  let component: MonocartontransportpassfinalComponent;
  let fixture: ComponentFixture<MonocartontransportpassfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonocartontransportpassfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonocartontransportpassfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
