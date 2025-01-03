import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritimportorderforeclosureComponent } from './spiritimportorderforeclosure.component';

describe('SpiritimportorderforeclosureComponent', () => {
  let component: SpiritimportorderforeclosureComponent;
  let fixture: ComponentFixture<SpiritimportorderforeclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritimportorderforeclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritimportorderforeclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
