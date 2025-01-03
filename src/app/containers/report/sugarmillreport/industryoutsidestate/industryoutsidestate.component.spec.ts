import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryoutsidestateComponent } from './industryoutsidestate.component';

describe('IndustryoutsidestateComponent', () => {
  let component: IndustryoutsidestateComponent;
  let fixture: ComponentFixture<IndustryoutsidestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryoutsidestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryoutsidestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
