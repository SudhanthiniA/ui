import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZerostockComponent } from './zerostock.component';

describe('ZerostockComponent', () => {
  let component: ZerostockComponent;
  let fixture: ComponentFixture<ZerostockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerostockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerostockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
