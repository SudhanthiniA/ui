import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushingComponent } from './crushing.component';

describe('CrushingComponent', () => {
  let component: CrushingComponent;
  let fixture: ComponentFixture<CrushingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrushingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrushingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
