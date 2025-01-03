import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CencusdataofdistrictsComponent } from './cencusdataofdistricts.component';

describe('CencusdataofdistrictsComponent', () => {
  let component: CencusdataofdistrictsComponent;
  let fixture: ComponentFixture<CencusdataofdistrictsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CencusdataofdistrictsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CencusdataofdistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
