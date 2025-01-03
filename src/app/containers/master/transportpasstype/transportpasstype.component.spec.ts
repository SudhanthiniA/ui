import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpasstypeComponent } from './transportpasstype.component';

describe('TransportpasstypeComponent', () => {
  let component: TransportpasstypeComponent;
  let fixture: ComponentFixture<TransportpasstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpasstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpasstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
