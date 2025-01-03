import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferofdistillationComponent } from './transferofdistillation.component';

describe('TransferofdistillationComponent', () => {
  let component: TransferofdistillationComponent;
  let fixture: ComponentFixture<TransferofdistillationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferofdistillationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferofdistillationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
