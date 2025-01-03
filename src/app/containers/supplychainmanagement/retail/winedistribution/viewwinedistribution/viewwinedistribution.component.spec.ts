import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwinedistributionComponent } from './viewwinedistribution.component';

describe('ViewwinedistributionComponent', () => {
  let component: ViewwinedistributionComponent;
  let fixture: ComponentFixture<ViewwinedistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwinedistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwinedistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
