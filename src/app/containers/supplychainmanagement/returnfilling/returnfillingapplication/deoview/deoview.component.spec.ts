import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoviewComponent } from './deoview.component';

describe('DeoviewComponent', () => {
  let component: DeoviewComponent;
  let fixture: ComponentFixture<DeoviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
