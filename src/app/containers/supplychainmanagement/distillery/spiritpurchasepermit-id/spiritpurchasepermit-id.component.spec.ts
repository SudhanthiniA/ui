import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritpurchasepermitIdComponent } from './spiritpurchasepermit-id.component';

describe('SpiritpurchasepermitIdComponent', () => {
  let component: SpiritpurchasepermitIdComponent;
  let fixture: ComponentFixture<SpiritpurchasepermitIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritpurchasepermitIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritpurchasepermitIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
