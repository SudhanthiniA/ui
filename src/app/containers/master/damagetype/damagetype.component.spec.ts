import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagetypeComponent } from './damagetype.component';

describe('DamagetypeComponent', () => {
  let component: DamagetypeComponent;
  let fixture: ComponentFixture<DamagetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
