import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransofspirittoclflblendingvatComponent } from './transofspirittoclflblendingvat.component';

describe('TransofspirittoclflblendingvatComponent', () => {
  let component: TransofspirittoclflblendingvatComponent;
  let fixture: ComponentFixture<TransofspirittoclflblendingvatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransofspirittoclflblendingvatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransofspirittoclflblendingvatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
