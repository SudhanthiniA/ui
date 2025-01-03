import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeounmappedComponent } from './deounmapped.component';

describe('DeounmappedComponent', () => {
  let component: DeounmappedComponent;
  let fixture: ComponentFixture<DeounmappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeounmappedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeounmappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
