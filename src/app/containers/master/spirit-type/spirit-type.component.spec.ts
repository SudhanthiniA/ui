import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritTypeComponent } from './spirit-type.component';

describe('SpiritTypeComponent', () => {
  let component: SpiritTypeComponent;
  let fixture: ComponentFixture<SpiritTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
