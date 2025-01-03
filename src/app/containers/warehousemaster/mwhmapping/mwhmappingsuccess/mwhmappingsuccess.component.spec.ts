import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwhmappingsuccessComponent } from './mwhmappingsuccess.component';

describe('MwhmappingsuccessComponent', () => {
  let component: MwhmappingsuccessComponent;
  let fixture: ComponentFixture<MwhmappingsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwhmappingsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwhmappingsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
