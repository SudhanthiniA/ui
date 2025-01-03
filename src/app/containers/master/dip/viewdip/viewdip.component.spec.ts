import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdipComponent } from './viewdip.component';

describe('ViewdipComponent', () => {
  let component: ViewdipComponent;
  let fixture: ComponentFixture<ViewdipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
