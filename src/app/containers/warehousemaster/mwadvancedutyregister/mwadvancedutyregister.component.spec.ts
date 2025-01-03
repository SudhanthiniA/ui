import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwadvancedutyregisterComponent } from './mwadvancedutyregister.component';

describe('MwadvancedutyregisterComponent', () => {
  let component: MwadvancedutyregisterComponent;
  let fixture: ComponentFixture<MwadvancedutyregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwadvancedutyregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwadvancedutyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
