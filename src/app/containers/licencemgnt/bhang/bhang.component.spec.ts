import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhangComponent } from './bhang.component';

describe('BhangComponent', () => {
  let component: BhangComponent;
  let fixture: ComponentFixture<BhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
