import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpackComponent } from './tpack.component';

describe('TpackComponent', () => {
  let component: TpackComponent;
  let fixture: ComponentFixture<TpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
