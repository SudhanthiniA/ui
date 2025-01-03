import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeereportComponent } from './feereport.component';

describe('FeereportComponent', () => {
  let component: FeereportComponent;
  let fixture: ComponentFixture<FeereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
