import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd7gaugeregisterComponent } from './viewpd7gaugeregister.component';

describe('Viewpd7gaugeregisterComponent', () => {
  let component: Viewpd7gaugeregisterComponent;
  let fixture: ComponentFixture<Viewpd7gaugeregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd7gaugeregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd7gaugeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
