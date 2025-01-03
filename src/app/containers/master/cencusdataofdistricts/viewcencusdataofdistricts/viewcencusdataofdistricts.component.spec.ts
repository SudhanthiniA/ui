import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcencusdataofdistrictsComponent } from './viewcencusdataofdistricts.component';

describe('ViewcencusdataofdistrictsComponent', () => {
  let component: ViewcencusdataofdistrictsComponent;
  let fixture: ComponentFixture<ViewcencusdataofdistrictsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcencusdataofdistrictsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcencusdataofdistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
