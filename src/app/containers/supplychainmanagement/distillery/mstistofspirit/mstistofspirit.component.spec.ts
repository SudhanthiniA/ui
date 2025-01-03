import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstistofspiritComponent } from './mstistofspirit.component';

describe('MstistofspiritComponent', () => {
  let component: MstistofspiritComponent;
  let fixture: ComponentFixture<MstistofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstistofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstistofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
