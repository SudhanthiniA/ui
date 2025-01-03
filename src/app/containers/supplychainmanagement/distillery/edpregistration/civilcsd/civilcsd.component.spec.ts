import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilcsdComponent } from './civilcsd.component';

describe('CivilcsdComponent', () => {
  let component: CivilcsdComponent;
  let fixture: ComponentFixture<CivilcsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilcsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilcsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
