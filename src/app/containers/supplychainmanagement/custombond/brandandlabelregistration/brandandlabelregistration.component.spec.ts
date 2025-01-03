import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandandlabelregistrationComponent } from './brandandlabelregistration.component';

describe('BrandandlabelregistrationComponent', () => {
  let component: BrandandlabelregistrationComponent;
  let fixture: ComponentFixture<BrandandlabelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandandlabelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandandlabelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
