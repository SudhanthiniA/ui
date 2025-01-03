import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritexportorderforeclosureComponent } from './spiritexportorderforeclosure.component';

describe('SpiritexportorderforeclosureComponent', () => {
  let component: SpiritexportorderforeclosureComponent;
  let fixture: ComponentFixture<SpiritexportorderforeclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritexportorderforeclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritexportorderforeclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
