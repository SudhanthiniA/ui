import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccidentcaseComponent } from './viewaccidentcase.component';

describe('ViewaccidentcaseComponent', () => {
  let component: ViewaccidentcaseComponent;
  let fixture: ComponentFixture<ViewaccidentcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccidentcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccidentcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
