import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReselectionComponent } from './reselection.component';

describe('ReselectionComponent', () => {
  let component: ReselectionComponent;
  let fixture: ComponentFixture<ReselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
