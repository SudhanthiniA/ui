import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd25PipilineComponent } from './pd25-pipiline.component';

describe('Pd25PipilineComponent', () => {
  let component: Pd25PipilineComponent;
  let fixture: ComponentFixture<Pd25PipilineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd25PipilineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd25PipilineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
