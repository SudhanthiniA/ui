import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeocancelComponent } from './deocancel.component';

describe('DeocancelComponent', () => {
  let component: DeocancelComponent;
  let fixture: ComponentFixture<DeocancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeocancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeocancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
