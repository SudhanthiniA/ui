import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspassgenerationComponent } from './transpassgeneration.component';

describe('TranspassgenerationComponent', () => {
  let component: TranspassgenerationComponent;
  let fixture: ComponentFixture<TranspassgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranspassgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspassgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
