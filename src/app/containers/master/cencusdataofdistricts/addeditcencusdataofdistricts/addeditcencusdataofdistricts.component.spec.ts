import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcencusdataofdistrictsComponent } from './addeditcencusdataofdistricts.component';

describe('AddeditcencusdataofdistrictsComponent', () => {
  let component: AddeditcencusdataofdistrictsComponent;
  let fixture: ComponentFixture<AddeditcencusdataofdistrictsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditcencusdataofdistrictsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditcencusdataofdistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
