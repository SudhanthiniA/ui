import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletestfeesComponent } from './sampletestfees.component';

describe('SampletestfeesComponent', () => {
  let component: SampletestfeesComponent;
  let fixture: ComponentFixture<SampletestfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampletestfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletestfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
