import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd7gaugeregisterComponent } from './pd7gaugeregister.component';

describe('Pd7gaugeregisterComponent', () => {
  let component: Pd7gaugeregisterComponent;
  let fixture: ComponentFixture<Pd7gaugeregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd7gaugeregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd7gaugeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
