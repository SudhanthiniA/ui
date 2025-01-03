import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwflmasterbondComponent } from './bwflmasterbond.component';

describe('BwflmasterbondComponent', () => {
  let component: BwflmasterbondComponent;
  let fixture: ComponentFixture<BwflmasterbondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwflmasterbondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwflmasterbondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
