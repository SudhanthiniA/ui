import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwstockinComponent } from './mwstockin.component';

describe('MwstockinComponent', () => {
  let component: MwstockinComponent;
  let fixture: ComponentFixture<MwstockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwstockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwstockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
