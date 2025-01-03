import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZerostockviewComponent } from './zerostockview.component';

describe('ZerostockviewComponent', () => {
  let component: ZerostockviewComponent;
  let fixture: ComponentFixture<ZerostockviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerostockviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerostockviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
