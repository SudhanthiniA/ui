import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarcoticComponent } from './narcotic.component';

describe('NarcoticComponent', () => {
  let component: NarcoticComponent;
  let fixture: ComponentFixture<NarcoticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarcoticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarcoticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
