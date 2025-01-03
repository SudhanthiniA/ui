import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastagereportComponent } from './wastagereport.component';

describe('WastagereportComponent', () => {
  let component: WastagereportComponent;
  let fixture: ComponentFixture<WastagereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastagereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastagereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
