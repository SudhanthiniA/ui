import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbwstockreportComponent } from './cbwstockreport.component';

describe('CbwstockreportComponent', () => {
  let component: CbwstockreportComponent;
  let fixture: ComponentFixture<CbwstockreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbwstockreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbwstockreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
