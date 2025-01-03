import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeepenalitysubtypeComponent } from './feepenalitysubtype.component';

describe('FeepenalitysubtypeComponent', () => {
  let component: FeepenalitysubtypeComponent;
  let fixture: ComponentFixture<FeepenalitysubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeepenalitysubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeepenalitysubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
