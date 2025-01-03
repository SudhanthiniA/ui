import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransofspirittobottlingvatComponent } from './transofspirittobottlingvat.component';

describe('TransofspirittobottlingvatComponent', () => {
  let component: TransofspirittobottlingvatComponent;
  let fixture: ComponentFixture<TransofspirittobottlingvatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransofspirittobottlingvatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransofspirittobottlingvatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
