import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritimportfeesComponent } from './spiritimportfees.component';

describe('SpiritimportfeesComponent', () => {
  let component: SpiritimportfeesComponent;
  let fixture: ComponentFixture<SpiritimportfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritimportfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritimportfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
