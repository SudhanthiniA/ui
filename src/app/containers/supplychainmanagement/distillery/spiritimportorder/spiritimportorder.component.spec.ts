import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritimportorderComponent } from './spiritimportorder.component';

describe('SpiritimportorderComponent', () => {
  let component: SpiritimportorderComponent;
  let fixture: ComponentFixture<SpiritimportorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritimportorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritimportorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
