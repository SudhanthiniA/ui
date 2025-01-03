import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstistoffgComponent } from './mstistoffg.component';

describe('MstistoffgComponent', () => {
  let component: MstistoffgComponent;
  let fixture: ComponentFixture<MstistoffgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstistoffgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstistoffgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
