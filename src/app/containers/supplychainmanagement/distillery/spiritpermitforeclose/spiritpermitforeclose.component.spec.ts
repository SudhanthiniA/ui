import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritpermitforecloseComponent } from './spiritpermitforeclose.component';

describe('SpiritpermitforecloseComponent', () => {
  let component: SpiritpermitforecloseComponent;
  let fixture: ComponentFixture<SpiritpermitforecloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritpermitforecloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritpermitforecloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
