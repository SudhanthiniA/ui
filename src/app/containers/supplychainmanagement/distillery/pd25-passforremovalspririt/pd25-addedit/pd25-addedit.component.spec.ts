import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd25AddeditComponent } from './pd25-addedit.component';

describe('Pd25AddeditComponent', () => {
  let component: Pd25AddeditComponent;
  let fixture: ComponentFixture<Pd25AddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd25AddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd25AddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
