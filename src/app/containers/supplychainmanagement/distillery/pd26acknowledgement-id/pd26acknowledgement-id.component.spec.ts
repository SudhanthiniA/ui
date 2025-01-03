import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26acknowledgementIdComponent } from './pd26acknowledgement-id.component';

describe('Pd26acknowledgementIdComponent', () => {
  let component: Pd26acknowledgementIdComponent;
  let fixture: ComponentFixture<Pd26acknowledgementIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26acknowledgementIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26acknowledgementIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
