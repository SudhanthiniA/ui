import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpassbookComponent } from './viewpassbook.component';

describe('ViewpassbookComponent', () => {
  let component: ViewpassbookComponent;
  let fixture: ComponentFixture<ViewpassbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpassbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
