import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd25PipilineComponent } from './addpd25-pipiline.component';

describe('Addpd25PipilineComponent', () => {
  let component: Addpd25PipilineComponent;
  let fixture: ComponentFixture<Addpd25PipilineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd25PipilineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd25PipilineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
