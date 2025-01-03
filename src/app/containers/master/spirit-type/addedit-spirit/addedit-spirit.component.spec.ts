import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditSpiritComponent } from './addedit-spirit.component';

describe('AddeditSpiritComponent', () => {
  let component: AddeditSpiritComponent;
  let fixture: ComponentFixture<AddeditSpiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditSpiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditSpiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
