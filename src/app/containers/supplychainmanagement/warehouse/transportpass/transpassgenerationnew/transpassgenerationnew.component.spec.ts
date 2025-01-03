import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspassgenerationnewComponent } from './transpassgenerationnew.component';

describe('TranspassgenerationnewComponent', () => {
  let component: TranspassgenerationnewComponent;
  let fixture: ComponentFixture<TranspassgenerationnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranspassgenerationnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspassgenerationnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
