import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportgenerationComponent } from './transportgeneration.component';

describe('TransportgenerationComponent', () => {
  let component: TransportgenerationComponent;
  let fixture: ComponentFixture<TransportgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
