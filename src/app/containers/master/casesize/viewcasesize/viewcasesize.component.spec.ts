import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcasesizeComponent } from './viewcasesize.component';

describe('ViewcasesizeComponent', () => {
  let component: ViewcasesizeComponent;
  let fixture: ComponentFixture<ViewcasesizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcasesizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcasesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
