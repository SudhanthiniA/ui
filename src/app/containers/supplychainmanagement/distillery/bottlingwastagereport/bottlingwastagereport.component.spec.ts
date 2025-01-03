import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingwastagereportComponent } from './bottlingwastagereport.component';

describe('BottlingwastagereportComponent', () => {
  let component: BottlingwastagereportComponent;
  let fixture: ComponentFixture<BottlingwastagereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingwastagereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingwastagereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
