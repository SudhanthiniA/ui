import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd5AddeditComponent } from './pd5-addedit.component';

describe('Pd5AddeditComponent', () => {
  let component: Pd5AddeditComponent;
  let fixture: ComponentFixture<Pd5AddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd5AddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd5AddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
