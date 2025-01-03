import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwindentforwardComponent } from './mwindentforward.component';

describe('MwindentforwardComponent', () => {
  let component: MwindentforwardComponent;
  let fixture: ComponentFixture<MwindentforwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwindentforwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwindentforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
