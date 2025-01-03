import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeolistComponent } from './deolist.component';

describe('DeolistComponent', () => {
  let component: DeolistComponent;
  let fixture: ComponentFixture<DeolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
