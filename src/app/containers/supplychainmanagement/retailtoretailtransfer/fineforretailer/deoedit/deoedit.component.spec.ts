import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoeditComponent } from './deoedit.component';

describe('DeoeditComponent', () => {
  let component: DeoeditComponent;
  let fixture: ComponentFixture<DeoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
