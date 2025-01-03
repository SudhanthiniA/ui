import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd7gaugeregisterComponent } from './addpd7gaugeregister.component';

describe('Addpd7gaugeregisterComponent', () => {
  let component: Addpd7gaugeregisterComponent;
  let fixture: ComponentFixture<Addpd7gaugeregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd7gaugeregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd7gaugeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
