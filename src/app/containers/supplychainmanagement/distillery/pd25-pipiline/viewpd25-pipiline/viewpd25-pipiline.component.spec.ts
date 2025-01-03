import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd25PipilineComponent } from './viewpd25-pipiline.component';

describe('Viewpd25PipilineComponent', () => {
  let component: Viewpd25PipilineComponent;
  let fixture: ComponentFixture<Viewpd25PipilineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd25PipilineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd25PipilineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
