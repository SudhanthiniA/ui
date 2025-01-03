import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremisestypeComponent } from './premisestype.component';

describe('PremisestypeComponent', () => {
  let component: PremisestypeComponent;
  let fixture: ComponentFixture<PremisestypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremisestypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremisestypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
