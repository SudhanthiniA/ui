import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesinsideupComponent } from './industriesinsideup.component';

describe('IndustriesinsideupComponent', () => {
  let component: IndustriesinsideupComponent;
  let fixture: ComponentFixture<IndustriesinsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriesinsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesinsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
