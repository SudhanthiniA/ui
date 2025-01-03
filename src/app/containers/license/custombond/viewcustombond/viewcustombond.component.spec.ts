import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustombondComponent } from './viewcustombond.component';

describe('ViewcustombondComponent', () => {
  let component: ViewcustombondComponent;
  let fixture: ComponentFixture<ViewcustombondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustombondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustombondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
