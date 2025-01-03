import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedutyregisterComponent } from './advancedutyregister.component';

describe('AdvancedutyregisterComponent', () => {
  let component: AdvancedutyregisterComponent;
  let fixture: ComponentFixture<AdvancedutyregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedutyregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedutyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
