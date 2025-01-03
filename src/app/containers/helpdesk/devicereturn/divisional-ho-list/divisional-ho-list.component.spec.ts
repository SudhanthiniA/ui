import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionalHoListComponent } from './divisional-ho-list.component';

describe('DivisionalHoListComponent', () => {
  let component: DivisionalHoListComponent;
  let fixture: ComponentFixture<DivisionalHoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionalHoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionalHoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
