import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgoodstypemasterComponent } from './viewgoodstypemaster.component';

describe('ViewgoodstypemasterComponent', () => {
  let component: ViewgoodstypemasterComponent;
  let fixture: ComponentFixture<ViewgoodstypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgoodstypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgoodstypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
