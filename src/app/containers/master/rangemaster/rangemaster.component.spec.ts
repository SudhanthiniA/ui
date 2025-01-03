import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangemasterComponent } from './rangemaster.component';

describe('RangemasterComponent', () => {
  let component: RangemasterComponent;
  let fixture: ComponentFixture<RangemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
