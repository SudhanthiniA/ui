import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbrComponent } from './hbr.component';

describe('HbrComponent', () => {
  let component: HbrComponent;
  let fixture: ComponentFixture<HbrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
