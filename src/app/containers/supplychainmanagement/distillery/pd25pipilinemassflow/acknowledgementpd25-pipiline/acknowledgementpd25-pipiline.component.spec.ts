import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acknowledgementpd25PipilineComponent } from './acknowledgementpd25-pipiline.component';

describe('Acknowledgementpd25PipilineComponent', () => {
  let component: Acknowledgementpd25PipilineComponent;
  let fixture: ComponentFixture<Acknowledgementpd25PipilineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acknowledgementpd25PipilineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acknowledgementpd25PipilineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
