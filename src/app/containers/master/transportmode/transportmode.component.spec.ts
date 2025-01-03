import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportmodeComponent } from './transportmode.component';

describe('TransportmodeComponent', () => {
  let component: TransportmodeComponent;
  let fixture: ComponentFixture<TransportmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
