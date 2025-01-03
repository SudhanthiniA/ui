import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletmasterComponent } from './palletmaster.component';

describe('PalletmasterComponent', () => {
  let component: PalletmasterComponent;
  let fixture: ComponentFixture<PalletmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalletmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
