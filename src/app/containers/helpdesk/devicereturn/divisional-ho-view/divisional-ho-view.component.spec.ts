import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionalHoViewComponent } from './divisional-ho-view.component';

describe('DivisionalHoViewComponent', () => {
  let component: DivisionalHoViewComponent;
  let fixture: ComponentFixture<DivisionalHoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionalHoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionalHoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
