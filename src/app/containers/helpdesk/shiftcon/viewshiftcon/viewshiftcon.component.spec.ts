import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshiftconComponent } from './viewshiftcon.component';

describe('ViewshiftconComponent', () => {
  let component: ViewshiftconComponent;
  let fixture: ComponentFixture<ViewshiftconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshiftconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshiftconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
