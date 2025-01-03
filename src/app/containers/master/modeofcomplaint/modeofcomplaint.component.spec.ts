import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeofcomplaintComponent } from './modeofcomplaint.component';

describe('ModeofcomplaintComponent', () => {
  let component: ModeofcomplaintComponent;
  let fixture: ComponentFixture<ModeofcomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeofcomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeofcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
