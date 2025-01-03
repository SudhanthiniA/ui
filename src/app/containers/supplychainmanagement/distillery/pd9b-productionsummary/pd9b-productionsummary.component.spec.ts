import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd9bProductionsummaryComponent } from './pd9b-productionsummary.component';

describe('Pd9bProductionsummaryComponent', () => {
  let component: Pd9bProductionsummaryComponent;
  let fixture: ComponentFixture<Pd9bProductionsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd9bProductionsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd9bProductionsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
