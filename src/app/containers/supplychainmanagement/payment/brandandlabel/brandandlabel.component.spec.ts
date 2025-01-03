import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandandlabelComponent } from './brandandlabel.component';

describe('BrandandlabelComponent', () => {
  let component: BrandandlabelComponent;
  let fixture: ComponentFixture<BrandandlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandandlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandandlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
